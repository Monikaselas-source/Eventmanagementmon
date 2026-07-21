const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
name:String,
date:String,
location:String,
capacity:Number,
reg:Number,
status:String
});

const Event = mongoose.model("Event",EventSchema);

router.get("/", async(req,res)=>{
const events = await Event.find();
res.json(events);
});

router.post("/", async(req,res)=>{
const event = new Event(req.body);
await event.save();
res.json(event);
});

router.delete("/:id", async(req,res)=>{
await Event.findByIdAndDelete(req.params.id);
res.json({message:"Deleted"});
});

router.put("/:id", async(req,res)=>{
const updated = await Event.findByIdAndUpdate(
req.params.id,
req.body,
{new:true}
);
res.json(updated);
});

module.exports = router;