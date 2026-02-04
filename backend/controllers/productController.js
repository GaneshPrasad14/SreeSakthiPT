import Product from '../models/Product.js';

const getProducts = async (req, res) => {
    const products = await Product.find({});
    res.json(products);
};

const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

const createProduct = async (req, res) => {
    const { name, category, description, price } = req.body;
    const images = req.files ? req.files.map(file => `/uploads/${file.filename}`) : [];

    const product = new Product({
        name,
        category,
        description,
        price,
        imageUrls: images,
    });

    const createdProduct = await Product.create(product);
    res.status(201).json(createdProduct);
};

const updateProduct = async (req, res) => {
    const { name, category, description, price } = req.body;
    const images = req.files && req.files.length > 0 ? req.files.map(file => `/uploads/${file.filename}`) : undefined;

    const product = await Product.findById(req.params.id);

    if (product) {
        product.name = name || product.name;
        product.category = category || product.category;
        product.description = description || product.description;
        product.price = price || product.price;
        if (images) {
            product.imageUrls = images;
        }

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

const deleteProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        await Product.deleteOne({ _id: product._id });
        res.json({ message: 'Product removed' });
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

export { getProducts, getProductById, createProduct, updateProduct, deleteProduct };
