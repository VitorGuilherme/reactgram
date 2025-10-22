const { json } = require("express");
const Photo = require("../models/Photo");
const User = require("../models/User");

const mongoose = require("mongoose");

// Insert a photo, with an user related to it
const insertPhoto = async (req, res) => {
  const { title } = req.body;

  const image = req.file.fileName;

  const reqUser = req.user;

  const user = await User.findById(reqUser._id);

  // Crete a photo
  const newPhoto = await Photo.create({
    image,
    title,
    userId: user._id,
    userName: user.name,
  });

  // If photo was created successfully, return data
  if (!newPhoto) {
    res.status(422).json({
      errors: ["Ocorreu um erro, por favor tente novamente mais tarde"],
    });
  }

  res.status(201).json(newPhoto);
};

module.exports = { insertPhoto };
