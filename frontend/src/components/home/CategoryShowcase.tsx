import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
import api from "@/services/api";

const categories = [
    { name: "Paper & Board Machines", slug: "paper-board" },
    { name: "Paper Machine Parts", slug: "parts" },
    { name: "Finishing Equipment", slug: "finishing" },
    { name: "Energy Production", slug: "energy" },
    { name: "Spare Parts & Equipment", slug: "spares" },
];

interface Product {
    _id: string;
    name: string;
    category: string;
    imageUrls: string[];
    price: number;
}

export const CategoryShowcase = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [showcaseItems, setShowcaseItems] = useState<{ category: any; product: Product | null }[]>([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const { data } = await api.get('/products');
            setProducts(data);
            processShowcase(data);
        } catch (error) {
            console.error("Failed to fetch products", error);
        } finally {
            setLoading(false);
        }
    };

    const processShowcase = (allProducts: Product[]) => {
        const items = categories.map((cat) => {
            // Filter products for this category (matching by name or close enough string logic if needed, 
            // but usually dashboard saves exact string matching category name)
            // Note: Dashboard categories: 'Paper & Board Machines', etc. match the 'name' here.
            const catProducts = allProducts.filter(p => p.category === cat.name);

            // Select random product
            let randomProduct: Product | null = null;
            if (catProducts.length > 0) {
                const randomIndex = Math.floor(Math.random() * catProducts.length);
                randomProduct = catProducts[randomIndex];
            }

            return { category: cat, product: randomProduct };
        });
        setShowcaseItems(items);
    };

    if (loading) {
        return <div className="py-20 text-center"><Loader2 className="w-8 h-8 animate-spin mx-auto text-gold" /></div>;
    }

    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <span className="text-gold font-semibold uppercase tracking-wider text-sm">Featured Inventory</span>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mt-2">
                        Machinery Spotlight
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {showcaseItems.map((item, index) => (
                        <div key={item.category.slug} className="flex flex-col h-full bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
                            {/* Product Image Area */}
                            <div className="h-48 bg-gray-200 relative overflow-hidden group">
                                {item.product ? (
                                    <img
                                        src={item.product.imageUrls && item.product.imageUrls.length > 0
                                            ? `${import.meta.env.VITE_API_URL}${item.product.imageUrls[0]}`
                                            : "/placeholder.svg"
                                        }
                                        alt={item.product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                                        No products available
                                    </div>
                                )}
                                <div className="absolute top-2 left-2 bg-navy/90 text-gold text-xs font-bold px-2 py-1 rounded uppercase">
                                    {/* Shorten category name for badge if needed, or just show category */}
                                    {item.category.name.split(' ')[0]}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-4 flex flex-col flex-grow">
                                {item.product ? (
                                    <>
                                        <Link to={`/product/${item.product._id}`}>
                                            <h3 className="font-bold text-navy mb-2 line-clamp-2 hover:text-gold transition-colors min-h-[3rem]">
                                                {item.product.name}
                                            </h3>
                                        </Link>
                                        <div className="mt-auto pt-4 space-y-3">
                                            <Link to={`/product/${item.product._id}`} className="block">
                                                <Button variant="outline" size="sm" className="w-full border-navy/20 hover:border-navy hover:bg-navy hover:text-white transition-colors">
                                                    View Details
                                                </Button>
                                            </Link>
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex-grow flex items-center justify-center text-gray-400 italic text-sm">
                                        Coming Soon
                                    </div>
                                )}

                                {/* View All Category Button - Always visible even if no product? Or at bottom? 
                    Requirement: "with view all product button"
                */}
                                <div className="mt-3 pt-3 border-t border-gray-200">
                                    <Link to={`/products?category=${item.category.slug}`}>
                                        <Button variant="ghost" size="sm" className="w-full text-xs text-muted-foreground hover:text-gold uppercase tracking-wider">
                                            View All {item.category.name.split(' ')[0]} <ArrowRight className="w-3 h-3 ml-1" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
