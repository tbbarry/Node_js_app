import { Router } from "express";
import { Book } from "../models/BookModel";
import upload from "../config/multerCfg";

export const router = Router()

router.get('/', async (req, res) => {
    try {
        const books = await Book.findAll()
        res.json(books)
    } catch (error) {
        res.status(500).json("Error fetching books")
    }
})

router.post("/", upload.single("image") ,async (req, res) => {
  try {
    const { title, author, genre, year } = req.body;
    const image = req.file ? req.file.path : null;
 
    const newBook = await Book.create({ title, author, genre, year, image });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json("Error adding books");
  }
});

router.put("/:id", upload.single("image") , async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) res.status(404).json("Book not found");
 
    const { title, author, genre, year } = req.body;
    const image = req.file ? req.file.path : book.image;
    await book.update({ title, author, genre, year, image });
    res.json({ message: "Book successfully updated", book });
  } catch (error) {
    res.status(500).json("Eror updating book");
  }
});

router.get("/:id", async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id)
        if(!book) {
            res.status(404).json("Book not found")
        }
        res.json(book)
    } catch (error) {
        res.status(500).json("Error fetching book")
    }
})


router.delete("/:id", async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id)
        if(!book) {
            res.status(404).json("Book not found")
        } 
        await book.destroy(book)
        res.json("Book successfully deleted")
    } catch (error) {
        res.status(500).json("Error deleting book", error)
    }
})