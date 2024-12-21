const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body class="bg-slate-400 grid place-content-center ">
    <h1 class="text-purple-800 font-semibold text-2xl m-4 text-center ">A Card From JJK</h1>

    <!-- first -->
    <div class="p-5">
        <div class="p-6 max-w-sm mx-auto bg-slate-50 rounded-2xl shadow-lg flex items-center space-x-4">
            <div>
                <img class="h-30 w-40 rounded-lg"src="https://staticg.sportskeeda.com/editor/2023/08/3626c-16921875120044-1920.jpg?w=640" alt="">
            </div>
            <div>
                <div class="text-2xl font-medium text-blue-950">
                    <p>GOJO Satoru</p>
                    <p class="text-base text-blue-500">The Master</p>
                </div>
            </div>
        </div>
    </div>

    <button class="bg-sky-500 text-center mt-4 text-white text-base p-4 rounded-xl hover:bg-white hover:text-black">Buy Now</button>

    <div class="text-center my-4">
        <p class="text-white md:text-green-900 sm:text-orange-950 font-bold" >A card of JDM</p>
    </div>

    <div class="mt-3">
        <div class="max-w-sm max-auto bg-white rounded-xl md:max-w-2xl overflow-hidden">
            <div class="md:flex">
                <div>
                    <img class="h-48 w-full object-cover md:h-full  md:w-48" src="https://images.unsplash.com/photo-1713366572698-b6297e950bbe?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                </div>
                <div class="p-8">
                    <div class="uppercase text-lg text-indigo-500 font-bold ">A JDM CAR</div>
                    <a class="block mt-1 text-lg font-medium text-black hover:text-blue-800" href="#">Tailwind CSS is amazing, Once You Understand the <span class="bg-yellow-500 p-[2px] px-[14px] hover:text-black">POWER</span> of It</a>
                    <p class="mt-2 text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, pariatur!</p>
                </div>
            </div>
        </div>
    </div>

</body>
</html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
