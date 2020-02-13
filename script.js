const DATA = [
  {
    language: "C#",
    description: `C# (pronounced "C-sharp") is an object-oriented programming language from Microsoft that aims to combine the computing power of C++ with the programming ease of Visual Basic. C# is designed to work with Microsoft's . Net platform.`,
    imgUrl: "http://cortal-prod.s3.amazonaws.com/c.png"
  },
  {
    language: "Dart",
    description:
      "Dart is an object-oriented, class defined, garbage-collected language using a C-style syntax that transcompiles optionally into JavaScript. It is used to code Flutter mobile apps.",
    imgUrl: "http://cortal-prod.s3.amazonaws.com/dart.png"
  },
  {
    language: "Go",
    description:
      "Go, also known as Golang, is a statically typed, compiled programming language designed at Google. Go is syntactically similar to C, but with memory safety, garbage collection and is designed for scale.",
    imgUrl: "http://cortal-prod.s3.amazonaws.com/golang.png"
  },
  {
    language: "Java",
    description:
      "Java is a high-level programming language developed by Sun Microsystems. It was originally designed for developing programs for set-top boxes and handheld devices, but later became a popular choice for creating web applications.",
    imgUrl: "http://cortal-prod.s3.amazonaws.com/java.png"
  },
  {
    language: "Javascript",
    description:
      "JS is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages.",
    imgUrl: "http://cortal-prod.s3.amazonaws.com/js.png"
  },
  {
    language: "Python",
    description: `Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse.`,
    imgUrl: "http://cortal-prod.s3.amazonaws.com/python.png"
  }
];

const container = document.getElementById("container");

DATA.forEach(function(item) {
  let newDiv = document.createElement("div");
  newDiv.className = "card";
  newDiv.innerHTML = `<img src="${item.imgUrl}" />
                                <div class="card-body">
                                    <h3 class="title">${item.language}</h3>
                                    <p>${item.description}</p>
                                </div>`;
  document.getElementById("container").appendChild(newDiv);
});
