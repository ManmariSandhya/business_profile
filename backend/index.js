let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path")
let router = require("./routes/router");
let reviewSchema = require("./Models/review");
// Express Route
const studentRoute = require("./routes/student.routes");
// const multer = require("multer");

// Connecting mongoDB Database
mongoose
  .connect("mongodb+srv://sandhyamanmari1234:sandhya123@cluster0.dftc8sm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`,
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err.reason);
  });

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(cors());
app.use(express.json())
app.use("/students", studentRoute);
app.use(router);


app.post('/api/reviews', async (req, res) => {
  try {
    const { name, rating, comment } = req.body;
    const newReview = new reviewSchema({ name, rating, comment });
    await newReview.save();
    res.status(201).json({ message: 'Review saved successfully' });
  } catch (error) {
    console.error('Error saving review:', error);
    res.status(500).json({ error: 'Error saving review' });
  }
});


// IMAGE DETAILS


const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'vendors/images_vendors')
  },
  filename:(req, file,cb) => {
  cb(null, file.fieldname + "_" +  Date.now() + path.extname(file.originalname))
  }
});
const upload = multer({
  storage: storage
})

const UserSchema = new mongoose.Schema({

 image:String
  
})
const UserModel = mongoose.model("vendorsImages", UserSchema)


app.post("/upload",upload.single('file'), (req,res)=>{
  UserModel.create({image:req.file.filename})
  .then(result => res.json(result))
  .catch(err => console.log(err))
})
// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});


// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});



