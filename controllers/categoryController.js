const Category = require('../models/Categories')

module.exports = {
    createCategory: async (req, res) => {
        const newCategory = Category(req.body)


        try {
            await newCategory.save()

            res.status(200).json({ status: true, message: "Category saved succesfully" })

        } catch (error) {
            res.status(500).json({ status: false, message: "Failed to save category " + error.message })
        }
    },

    updateCategory: async (req, res) => {
        const id = req.params.id;
        const { title, value, imageUrl } = req.body

        try {
            const updatedCategory = await Category.findByIdAndUpdate(id, { title: title, value: value, imageUrl: imageUrl }, { new: true })

            if (!updatedCategory) {
                res.status(401).json({ status: false, message: "Catogory not found" })
            }
            if (updatedCategory) {
                res.status(200).json({ status: true, message: "Category created" })
            }
        } catch (error) {
            res.status(500).json({ status: false, message: error.message })
        }
    },

    deleteCategory: async (req, res) => {
        const id = req.params.id;

        try {

            const category = await Category.findById(id)
            if (!category) {
                return res.status(404).json({ status: false, message: "Category not found" })
            }
            
                await Category.findByIdAndDelete(id)

                res.status(200).json({ status: true, message: "Category succesfully deleted" })
            

        } catch (error) {
            res.status(500).json({ status: false, message: error.message })
        }
    },

    getAllCategories : async(req, res) => {
        try {
            const categories = await Category.find({},{_v:0})

            res.status(200).json(categories) 

        } catch (error) {
            res.status(500).json({status:false, message : error.message})
        }
    },

    patchCategoryImage : async(req, res) => {
        const id = req.params.id
        
        try {
            
        } catch (error) {
            
        }

    }
};