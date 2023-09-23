const express = require("express");

let rooms = require("../storedData/rooms");

const roomstart = parseInt(100);

const router = express.Router();

const getRoomsDetails = async (req, res) => {
  try {
    res.status(200).send(rooms);
  } catch (error) {
    console.log(error);
    res.status(404).send({ message: "Can't get the Data" });
  }
};

const getRoomById = async (req, res) => {
  try {
    const { id } = req.params;
    const filteredRoom = rooms.filter((room) => room.roomID === id);
    res.status(200).send(filteredRoom);
  } catch (error) {
    console.log(error);
    res.status(404).send({ message: "Internal server error" });
  }
};

const createRoom = async (req, res) => {
  try {
    const newRoom = { ...req.body, roomID: `${roomstart + rooms.length}` };
    rooms = [...rooms, newRoom];
    res.send({ newRoom, message: "Room created" });
  } catch (error) {
    console.log(error);
    res.status(404).send({ message: "Give the valid Room details" });
  }
};

const deleteRoom = async (req, res) => {
  const { id } = req.params;
  const remainingRoom = rooms.filter((room) => room.roomID != id);
  rooms = [...remainingRoom];
  res.send({ rooms, message: "Deleted sucessfully" });
};

const bookRoom = async (req, res) => {
  const { id } = req.params;
  const filterRoom = rooms.filter((room) => room.roomID === id);
  filterRoom[0].bookedDetails = [{ ...req.body, roomID: id }];
  res.send(rooms);
};

const getCustomers = async (req, res) => {
  const customer = rooms.map((room) => {
    return [...room.bookedDetails, { RoomName: room.name }];
  });
  res.send(customer);
};

module.exports.allRooms = getRoomsDetails;
module.exports.roomById = getRoomById;
module.exports.createRoom = createRoom;
module.exports.deleteRoom = deleteRoom;
module.exports.bookRoom = bookRoom;
module.exports.allCustomers=getCustomers;
