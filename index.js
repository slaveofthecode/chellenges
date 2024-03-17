import express from "express";
import mustacheExpress from "mustache-express";

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));

// Set up mustache as the view engine
app.engine(".mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");
// ---

app.get("/", (req, res) => {
	const data = {
		author: {
			name: "slaveofthecode",
		},
		page: {
			title: "Challenges",
			url: "https://github.com/slaveofthecode/challenges/tree/master",
		},
		projects: [
			{
				name: "electro-world-checkout",
				url: "https://github.com/slaveofthecode/challenges/tree/master/electro-world-checkout",
				demo: null,
				description:
					"In this repository, you can see a simple website that calculates the total price of a shopping cart, getting data from a JSON file, and using different components passing the data by props. The code is written in Javascript.",
				image: "https://raw.githubusercontent.com/slaveofthecode/challenges/master/gato/gato.png",
				stack: ["React", "Javascript", "HTML", "CSS"],
			},
			{
				name: "gato",
				url: "https://github.com/slaveofthecode/challenges/tree/master/gato",
				demo: "https://challenges-gato.vercel.app/",
				description:
					"Simple code that calls an extern API to get the data with images, that then shows a grid. The user can show more details in a modal and apply a filter using the Debounce technique. The code is written in React and Javascript.",
				image: "https://raw.githubusercontent.com/slaveofthecode/challenges/master/gato/gato.png",
				stack: ["React", "Javascript", "HTML", "CSS"],
			},
			{
				name: "pangram",
				url: "https://github.com/slaveofthecode/challenges/tree/master/pangram",
				demo: null,
				description:
					"This simple code, checks if a string is a pangram or not. A pangram is a sentence that contains all the letters of the alphabet at least once. For example, the quick brown fox jumps over the lazy dog. The code is written in Javascript.",
				image: "https://raw.githubusercontent.com/slaveofthecode/challenges/master/gato/gato.png",
				stack: ["React", "Javascript", "HTML", "CSS"],
			},
		],
		html: {
			linkStyleIndex:
				'<link rel="stylesheet" type="text/css" href="index.css" />',
		},
	};

	res.render("index", data);
});

app.listen(port, () => {
	console.log("Server is running on port 3000");
});
