import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Send, ArrowLeft } from "lucide-react";
import api from '../services/api';

interface Product {
    _id: string;
    name: string;
    category: string;
    description: string;
    price: number;
    imageUrls: string[];
}

const ProductDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [selectedImage, setSelectedImage] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            fetchProduct(id);
        }
    }, [id]);

    useEffect(() => {
        if (product && product.imageUrls && product.imageUrls.length > 0) {
            setSelectedImage(product.imageUrls[0]);
        }
    }, [product]);

    const fetchProduct = async (productId: string) => {
        try {
            const { data } = await api.get(`/products/${productId}`);
            setProduct(data);
        } catch (error) {
            console.error('Failed to fetch product', error);
        }
    };

    const handleEnquiry = () => {
        if (!product) return;
        const message = `Hi, I am interested in ${product.name}. Please provide more details.`;
        const url = `https://wa.me/918754020062?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    if (!product) {
        return (
            <Layout>
                <div className="min-h-screen flex items-center justify-center">
                    <p>Loading...</p>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <Button
                        variant="ghost"
                        onClick={() => navigate('/products')}
                        className="mb-6 flex items-center text-gray-600 hover:text-gray-900"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Products
                    </Button>

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="md:flex">
                            <div className="md:w-1/2 p-4">
                                <div className="mb-4">
                                    <img
                                        src={selectedImage ? `${import.meta.env.VITE_API_URL}${selectedImage}` : "/placeholder.svg"}
                                        alt={product.name}
                                        className="w-full h-96 object-cover rounded-lg"
                                    />
                                </div>
                                {product.imageUrls && product.imageUrls.length > 0 && (
                                    <div className="flex space-x-2 overflow-x-auto">
                                        {product.imageUrls.map((img, index) => (
                                            <img
                                                key={index}
                                                src={`${import.meta.env.VITE_API_URL}${img}`}
                                                alt={`${product.name} ${index + 1}`}
                                                className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${selectedImage === img ? 'border-indigo-600' : 'border-transparent'}`}
                                                onClick={() => setSelectedImage(img)}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="p-8 md:w-1/2 flex flex-col justify-between">
                                <div>
                                    <div className="text-sm font-bold text-indigo-600 uppercase tracking-wide mb-2">
                                        {product.category}
                                    </div>
                                    <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{product.name}</h1>
                                    <p className="text-gray-500 text-lg mb-6 leading-relaxed">
                                        {product.description}
                                    </p>
                                    <p className="text-4xl font-bold text-gray-900 mb-8">
                                        ₹{product.price}
                                    </p>
                                </div>
                                <div>
                                    <Button
                                        onClick={handleEnquiry}
                                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center"
                                        size="lg"
                                    >
                                        <Send className="w-5 h-5 mr-2" />
                                        Enquire in WhatsApp
                                    </Button>
                                    <p className="text-center text-sm text-gray-500 mt-4">
                                        Or call us at +91 87540 20062
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProductDetails;
