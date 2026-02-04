import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Grid, List, ChevronRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const categories = [
  { id: "all", name: "All Products" },
  { id: "Paper & Board Machines", name: "Paper & Board Machines" },
  { id: "Paper Machine Parts", name: "Paper Machine Parts" },
  { id: "Finishing Equipment", name: "Finishing Equipment" },
  { id: "Energy Production", name: "Energy Production" },
  { id: "Spare Parts & Equipment", name: "Spare Parts & Equipment" },
];

interface Product {
  _id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  imageUrls: string[];
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await api.get('/products');
      setProducts(data);
    } catch (error) {
      console.error('Failed to fetch products', error);
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-navy">
        <div className="container-custom relative text-center">
          <span className="text-gold font-semibold uppercase tracking-wider text-sm">Our Inventory</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-4">
            Products & Equipment
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Browse our extensive collection of quality second-hand paper machinery and equipment.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-card border-border h-12"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0">
              <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex-shrink-0 ${selectedCategory === category.id
                    ? "bg-navy text-primary-foreground"
                    : "bg-card hover:bg-muted"
                    }`}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "bg-muted" : ""}
              >
                <Grid className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setViewMode("list")}
                className={viewMode === "list" ? "bg-muted" : ""}
              >
                <List className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Products Grid/List */}
          <div className={`${viewMode === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            : "flex flex-col gap-4"
            }`}>
            {filteredProducts.map((product) => (
              <div
                key={product._id}
                className={`bg-card rounded-xl overflow-hidden shadow-soft border border-border group hover:shadow-lg transition-all duration-300 cursor-pointer ${viewMode === "list" ? "flex flex-col md:flex-row" : ""
                  }`}
                onClick={() => navigate(`/product/${product._id}`)}
              >
                <div className={`relative overflow-hidden ${viewMode === "list" ? "md:w-64 h-48 md:h-auto" : "h-48"
                  }`}>
                  <img
                    src={product.imageUrls && product.imageUrls.length > 0 ? `${import.meta.env.VITE_API_URL}${product.imageUrls[0]}` : "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-navy text-xs font-semibold px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className={`p-6 flex flex-col ${viewMode === "list" ? "flex-1" : ""}`}>
                  <h3 className="font-heading text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <p className="text-gold font-bold text-lg mb-4">
                    ₹{product.price}
                  </p>

                  <div className="mt-auto">
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                      <ChevronRight className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Products;
