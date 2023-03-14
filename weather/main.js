const path = require('path'); //работа с файлами внутри проекта
const url = require('url');
const { app, BrowserWindow } = require('electron');

let win; // значения всей программы сюда(открытие, закрытие программы)

function createWindow() {
	win = new BrowserWindow({
		width: 700,
		height: 500,
		icon: __dirname + "/img/icon.jpg" // __dirname - папка нашего проекта
	});

	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	})); // открытие нужного файла

	// win.webContents.openDevTools(); //среда разработки - это окошко для отслеживания кода(как в браузере - стили чекнуть и тп)

	win.on('closed', () => {
		win = null;
	}); // on - обработчик события; обнуляем win;
}

app.on('ready', createWindow); // при запуске программы

app.on('window-all-closed', () => {
	app.quit();
}); // при закрытии всех окон - программа окончательно выключается