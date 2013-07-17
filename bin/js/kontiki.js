/** Compiled by the Randori compiler v0.2.5.2 on Tue Jul 16 21:35:05 PDT 2013 */


// ====================================================
// flash.utils.getTimer
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.getTimer = function() {
	return new Date().getTime() - flash.utils.FlashTimingEngine.currentTime;
}

flash.utils.getTimer.className = "flash.utils.getTimer";

flash.utils.getTimer.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.utils.FlashTimingEngine');
	return p;
};

flash.utils.getTimer.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.getTimer.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.system.fscommand
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.system == "undefined")
	flash.system = {};

flash.system.fscommand = function(command, args) {
}

flash.system.fscommand.className = "flash.system.fscommand";

flash.system.fscommand.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.system.fscommand.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.system.fscommand.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.utils.getDefinitionByName
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.getDefinitionByName = function(value) {
	return {};
}

flash.utils.getDefinitionByName.className = "flash.utils.getDefinitionByName";

flash.utils.getDefinitionByName.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.utils.getDefinitionByName.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.getDefinitionByName.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.net.getClassByAlias
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.net == "undefined")
	flash.net = {};

flash.net.getClassByAlias = function() {
}

flash.net.getClassByAlias.className = "flash.net.getClassByAlias";

flash.net.getClassByAlias.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.net.getClassByAlias.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.net.getClassByAlias.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.utils.setInterval
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.setInterval = function(closure, delay, args) {
	return 1;
}

flash.utils.setInterval.className = "flash.utils.setInterval";

flash.utils.setInterval.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.utils.setInterval.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.setInterval.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.utils.describeType
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.describeType = function(value) {
	return avmplus.describeType(value, FLASH10_FLAGS);
}

flash.utils.describeType.className = "flash.utils.describeType";

flash.utils.describeType.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.utils.describeType.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.describeType.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.utils.setTimeout
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.setTimeout = function(closure, delay, args) {
	setTimeout($createStaticDelegate(this, closure), delay);
	return 1;
}

flash.utils.setTimeout.className = "flash.utils.setTimeout";

flash.utils.setTimeout.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.utils.setTimeout.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.setTimeout.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.net.navigateToURL
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.net == "undefined")
	flash.net = {};

flash.net.navigateToURL = function(request, window) {
}

flash.net.navigateToURL.className = "flash.net.navigateToURL";

flash.net.navigateToURL.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.net.navigateToURL.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.net.navigateToURL.injectionPoints = function(t) {
	return [];
};

// ====================================================
// trace
// ====================================================


trace = function(s) {
	return;
	if (arguments.length > 1)
		console.log(arguments);
	else
		console.log(arguments[0]);
}

trace.className = "trace";

trace.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

trace.getStaticDependencies = function(t) {
	var p;
	return [];
};

trace.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.utils.getQualifiedClassName
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.getQualifiedClassName = function(value) {
	var tmp = new value();
	return tmp.className;
}

flash.utils.getQualifiedClassName.className = "flash.utils.getQualifiedClassName";

flash.utils.getQualifiedClassName.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.utils.getQualifiedClassName.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.getQualifiedClassName.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.utils.clearInterval
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.clearInterval = function(id) {
}

flash.utils.clearInterval.className = "flash.utils.clearInterval";

flash.utils.clearInterval.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.utils.clearInterval.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.clearInterval.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.utils.clearTimeout
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.clearTimeout = function(id) {
}

flash.utils.clearTimeout.className = "flash.utils.clearTimeout";

flash.utils.clearTimeout.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.utils.clearTimeout.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.clearTimeout.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.utils.Dictionary
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.Dictionary = function(weakReference) {
};

flash.utils.Dictionary.className = "flash.utils.Dictionary";

flash.utils.Dictionary.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.utils.Dictionary.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.Dictionary.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'weakReference', t:'Boolean'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// mx.core.SoundAsset
// ====================================================

if (typeof mx == "undefined")
	var mx = {};
if (typeof mx.core == "undefined")
	mx.core = {};

mx.core.SoundAsset = function() {
};

mx.core.SoundAsset.className = "mx.core.SoundAsset";

mx.core.SoundAsset.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

mx.core.SoundAsset.getStaticDependencies = function(t) {
	var p;
	return [];
};

mx.core.SoundAsset.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.text.TextFormat
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.text == "undefined")
	flash.text = {};

flash.text.TextFormat = function(font, size, color, bold, italic, underline, url, target, align, leftMargin, rightMargin, indent, leading) {
};

flash.text.TextFormat.className = "flash.text.TextFormat";

flash.text.TextFormat.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.text.TextFormat.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.text.TextFormat.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'font', t:'String'});
			p.push({n:'size', t:'Object'});
			p.push({n:'color', t:'Object'});
			p.push({n:'bold', t:'Object'});
			p.push({n:'italic', t:'Object'});
			p.push({n:'underline', t:'Object'});
			p.push({n:'url', t:'String'});
			p.push({n:'target', t:'String'});
			p.push({n:'align', t:'String'});
			p.push({n:'leftMargin', t:'Object'});
			p.push({n:'rightMargin', t:'Object'});
			p.push({n:'indent', t:'Object'});
			p.push({n:'leading', t:'Object'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display3D.Context3DProgramType
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display3D == "undefined")
	flash.display3D = {};

flash.display3D.Context3DProgramType = function() {
};

flash.display3D.Context3DProgramType.FRAGMENT = "fragment";

flash.display3D.Context3DProgramType.VERTEX = "vertex";

flash.display3D.Context3DProgramType.className = "flash.display3D.Context3DProgramType";

flash.display3D.Context3DProgramType.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.Context3DProgramType.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.Context3DProgramType.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.system.SecurityDomain
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.system == "undefined")
	flash.system = {};

flash.system.SecurityDomain = function() {
};

flash.system.SecurityDomain.currentDomain = new flash.system.SecurityDomain();

flash.system.SecurityDomain.className = "flash.system.SecurityDomain";

flash.system.SecurityDomain.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.system.SecurityDomain.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.system.SecurityDomain.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.media.SoundMixer
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.media == "undefined")
	flash.media = {};

flash.media.SoundMixer = function() {
};

flash.media.SoundMixer.stopAll = function() {
	var $1;
	for (var $0 in ($1 = flash.media.SoundMixer.soundTransformInstance.transforms)){
		var transform = $1[$0];
		if (transform.buffer)
			transform.buffer.stop(0);
	}
};

flash.media.SoundMixer.cache = {};

flash.media.SoundMixer.ctx = null;

flash.media.SoundMixer.usingWebAudio = true;

flash.media.SoundMixer.noAudio = false;

flash.media.SoundMixer.codecs = {};

flash.media.SoundMixer.masterGain;

flash.media.SoundMixer.soundTransformInstance;

flash.media.SoundMixer.get_soundTransform = function() {
	if (!flash.media.SoundMixer.soundTransformInstance) {
		if (typeof(AudioContext) !== "undefined") {
			flash.media.SoundMixer.ctx = new webkitAudioContext();
		} else if (typeof(webkitAudioContext) !== "undefined") {
			flash.media.SoundMixer.ctx = new webkitAudioContext();
		} else if (typeof(Audio) !== "undefined") {
			flash.media.SoundMixer.usingWebAudio = false;
		} else {
			flash.media.SoundMixer.usingWebAudio = false;
			flash.media.SoundMixer.noAudio = true;
		}
		if (flash.media.SoundMixer.usingWebAudio) {
			flash.media.SoundMixer.masterGain = (typeof(flash.media.SoundMixer.ctx.createGain) === "undefined") ? flash.media.SoundMixer.ctx.createGainNode() : flash.media.SoundMixer.ctx.createGain();
			flash.media.SoundMixer.masterGain.gain.value = 1;
			flash.media.SoundMixer.masterGain.connect(flash.media.SoundMixer.ctx.destination);
		}
		var audioTest = null;
		if (!flash.media.SoundMixer.noAudio) {
			audioTest = new Audio();
			flash.media.SoundMixer.codecs = {mp3:!!audioTest.canPlayType("audio\/mpeg;").replace(/^no$/, ""), opus:!!audioTest.canPlayType("audio\/ogg; codecs=\"opus\"").replace(/^no$/, ""), ogg:!!audioTest.canPlayType("audio\/ogg; codecs=\"vorbis\"").replace(/^no$/, ""), wav:!!audioTest.canPlayType("audio\/wav; codecs=\"1\"").replace(/^no$/, ""), m4a:!!(audioTest.canPlayType("audio\/x-m4a;") || audioTest.canPlayType("audio\/aac;")).replace(/^no$/, ""), webm:!!audioTest.canPlayType("audio\/webm; codecs=\"vorbis\"").replace(/^no$/, "")};
		}
		flash.media.SoundMixer.soundTransformInstance = new flash.media.SoundTransform(1, 0);
	}
	return flash.media.SoundMixer.soundTransformInstance;
};

flash.media.SoundMixer.getGainNode = function() {
	var node = (typeof(flash.media.SoundMixer.ctx.createGain) === "undefined") ? flash.media.SoundMixer.ctx.createGainNode() : flash.media.SoundMixer.ctx.createGain();
	return node;
};

flash.media.SoundMixer.className = "flash.media.SoundMixer";

flash.media.SoundMixer.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.media.SoundTransform');
	return p;
};

flash.media.SoundMixer.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.media.SoundMixer.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.display3D.VertexBuffer3D
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display3D == "undefined")
	flash.display3D = {};

flash.display3D.VertexBuffer3D = function() {
this.buffer = null;
this.context3D = null;
this.elementsPerVertex = 0;
this.verticies = null;
};

flash.display3D.VertexBuffer3D.prototype.uploadFromVector = function(data, startVertex, numVertices) {
	trace("VertexBuffer3D.uploadFromVector: " + data.length + " startVertex: " + startVertex + " nV: " + numVertices + "  elementsPerVertex: " + this.elementsPerVertex);
	this.verticies = new ArrayBuffer(data.length * 4);
	var floatArr = new Float32Array(this.verticies);
	for (var i = 0; i < data.length; i++) {
		floatArr[i] = data[i];
	}
	this.context3D.webglContext.bindBuffer(34962, this.buffer);
	this.context3D.webglContext.bufferData(34962, this.verticies, 35048);
	this.context3D.lastVertexBuffer = this;
};

flash.display3D.VertexBuffer3D.prototype.uploadLast = function() {
	this.context3D.webglContext.bindBuffer(34962, this.buffer);
	this.context3D.webglContext.bufferData(34962, this.verticies, 35048);
	this.context3D.lastVertexBuffer = this;
};

flash.display3D.VertexBuffer3D.prototype.dispose = function() {
};

flash.display3D.VertexBuffer3D.className = "flash.display3D.VertexBuffer3D";

flash.display3D.VertexBuffer3D.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('trace');
	return p;
};

flash.display3D.VertexBuffer3D.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.VertexBuffer3D.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.text.StyleSheet
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.text == "undefined")
	flash.text = {};

flash.text.StyleSheet = function() {
};

flash.text.StyleSheet.className = "flash.text.StyleSheet";

flash.text.StyleSheet.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.text.StyleSheet.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.text.StyleSheet.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.ui.MouseCursorData
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.ui == "undefined")
	flash.ui = {};

flash.ui.MouseCursorData = function() {
this.hotSpot = null;
this.data = null;
};

flash.ui.MouseCursorData.className = "flash.ui.MouseCursorData";

flash.ui.MouseCursorData.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.ui.MouseCursorData.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.ui.MouseCursorData.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.display.FrameLabel
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.FrameLabel = function() {
};

flash.display.FrameLabel.className = "flash.display.FrameLabel";

flash.display.FrameLabel.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.FrameLabel.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.FrameLabel.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.display.GraphicsPathCommand
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.GraphicsPathCommand = function() {
};

flash.display.GraphicsPathCommand.MOVE_TO = 1;

flash.display.GraphicsPathCommand.LINE_TO = 2;

flash.display.GraphicsPathCommand.className = "flash.display.GraphicsPathCommand";

flash.display.GraphicsPathCommand.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.GraphicsPathCommand.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.GraphicsPathCommand.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.utils.FlashTimingEngine
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.FlashTimingEngine = function() {
	this.root = null;
	this.currentTimers = new flash.utils.Dictionary(false);
	this.TIMER_EVENT = new flash.events.TimerEvent("timer", false, false);
	this.availableObjects = [];
	this.lastID = 0;
	this.framePerSecond = 0;
	this.frameTime = 0;
	this.stopFlag = false;
	this.startFrameTime = 0;
	this.lastFrameTime = 0;
	this.ENTER_EVENT = new flash.events.Event("enterFrame", false, false);
	this.TIMER_COMPLETE_EVENT = new flash.events.TimerEvent("timerComplete", false, false);
	
};

flash.utils.FlashTimingEngine.stageInstance;

flash.utils.FlashTimingEngine.frameHandler;

flash.utils.FlashTimingEngine.embedLoadingObjects = [];

flash.utils.FlashTimingEngine.embedBitmapDatas = [];

flash.utils.FlashTimingEngine.embedSounds = [];

flash.utils.FlashTimingEngine.getEmbed = function(source) {
	if (!flash.utils.FlashTimingEngine.embedBitmapDatas[source]) {
		var bitmapData = new flash.display.BitmapData(0, 0, true, 0);
		bitmapData.embedImage(source);
		flash.utils.FlashTimingEngine.embedBitmapDatas[source] = bitmapData;
	}
	return flash.utils.FlashTimingEngine.embedBitmapDatas[source];
};

flash.utils.FlashTimingEngine.getSoundEmbed = function(source) {
	if (!flash.utils.FlashTimingEngine.embedSounds[source]) {
		var snd = new flash.media.Sound(new flash.net.URLRequest(source));
		flash.utils.FlashTimingEngine.embedLoadingObjects.push(snd);
		flash.utils.FlashTimingEngine.embedSounds[source] = snd;
	}
	return flash.utils.FlashTimingEngine.embedSounds[source];
};

flash.utils.FlashTimingEngine.setupStageInteractionEvents = function(canvas) {
	canvas.addEventListener("mousedown", $createStaticDelegate(flash.utils.FlashTimingEngine, flash.utils.FlashTimingEngine.captureEventHandler), true);
	canvas.addEventListener("mousemove", $createStaticDelegate(flash.utils.FlashTimingEngine, flash.utils.FlashTimingEngine.captureEventHandler), true);
	canvas.addEventListener("mouseup", $createStaticDelegate(flash.utils.FlashTimingEngine, flash.utils.FlashTimingEngine.captureEventHandler), true);
	if ("ontouchstart" in document.documentElement) {
		canvas.addEventListener("touchstart", $createStaticDelegate(flash.utils.FlashTimingEngine, flash.utils.FlashTimingEngine.captureTouchEventHandler), true);
		canvas.addEventListener("touchmove", $createStaticDelegate(flash.utils.FlashTimingEngine, flash.utils.FlashTimingEngine.captureTouchEventHandler), true);
		canvas.addEventListener("touchend", $createStaticDelegate(flash.utils.FlashTimingEngine, flash.utils.FlashTimingEngine.captureTouchEventHandler), true);
	}
};

flash.utils.FlashTimingEngine.captureEventHandler = function(event) {
	if (!flash.utils.FlashTimingEngine.stageInstance)
		return;
	var type = "mouseDown";
	if (event.type == "mousedown")
		type = "mouseDown";
	else if (event.type == "mousemove")
		type = "mouseMove";
	else if (event.type == "mouseup")
		type = "mouseUp";
	var me = new flash.events.flash.events.MouseEvent(type, false, false, event.offsetX, event.offsetY, null, false, false, false, false, 0, false, false, 0);
	flash.utils.FlashTimingEngine.stageInstance.dispatchEvent(me);
};

flash.utils.FlashTimingEngine.captureTouchEventHandler = function(event) {
	if (!flash.utils.FlashTimingEngine.stageInstance)
		return;
	var type = "touchBegin";
	if (event.type == "touchstart")
		type = "touchBegin";
	else if (event.type == "touchmove")
		type = "touchMove";
	else if (event.type == "touchend")
		type = "touchEnd";
};

flash.utils.FlashTimingEngine.start = function(root, framePerSecond, stageWidth, stageHeight, color) {
	try {
		flash.utils.FlashTimingEngine.frameHandler = new flash.utils.RequestAnimationFrame();
	} catch (error) {
	}
	if (!flash.utils.FlashTimingEngine.stageInstance)
		flash.utils.FlashTimingEngine.stageInstance = new flash.display.Stage();
	flash.utils.FlashTimingEngine.stageInstance.stageWidth = stageWidth;
	flash.utils.FlashTimingEngine.stageInstance.stageHeight = stageHeight;
	flash.utils.FlashTimingEngine.stageInstance.color = color;
	flash.utils.FlashTimingEngine.root = root;
	flash.utils.FlashTimingEngine.stopFlag = false;
	flash.utils.FlashTimingEngine.framePerSecond = framePerSecond;
	flash.utils.FlashTimingEngine.frameTime = 1000 / framePerSecond;
	flash.utils.FlashTimingEngine.currentTime = new Date().getTime();
	if (flash.utils.FlashTimingEngine.embedLoadingObjects.length == 0) {
		flash.utils.FlashTimingEngine.tick();
		root.dispatchEvent(new flash.events.Event("addedToStage", false, false));
	}
	else
		flash.utils.FlashTimingEngine.embedWait();
};

flash.utils.FlashTimingEngine.embedWait = function() {
	var allComplete = true;
	for (var i = 0; i < flash.utils.FlashTimingEngine.embedLoadingObjects.length; i++) {
		allComplete = allComplete && flash.utils.FlashTimingEngine.embedLoadingObjects[i].isLoaded;
	}
	trace("allComplete: " + allComplete);
	if (allComplete) {
		flash.utils.FlashTimingEngine.tick();
		flash.utils.FlashTimingEngine.root.dispatchEvent(new flash.events.Event("addedToStage", false, false));
	}
	else
		setTimeout($createStaticDelegate(flash.utils.FlashTimingEngine, flash.utils.FlashTimingEngine.embedWait), 50);
};

flash.utils.FlashTimingEngine.tick = function() {
	flash.utils.FlashTimingEngine.startFrameTime = new Date().getTime();
	flash.events.EventDispatcher.fireGlobalEvent(flash.utils.FlashTimingEngine.ENTER_EVENT);
	var timerObject;
	var $1;
	for (var $0 in ($1 = flash.utils.FlashTimingEngine.currentTimers)) {
		timerObject = $1[$0];
		if (!timerObject)
			continue;
		if (timerObject.timeLeft - flash.utils.FlashTimingEngine.lastFrameTime < 0) {
			if (timerObject.repeat >= 0)
				timerObject.repeat--;
			timerObject.timeLeft = timerObject.time;
			timerObject.callBack.dispatchEvent(flash.utils.FlashTimingEngine.TIMER_EVENT);
			if (timerObject.repeat == -1) {
				timerObject.callBack.dispatchEvent(flash.utils.FlashTimingEngine.TIMER_COMPLETE_EVENT);
				flash.utils.FlashTimingEngine.addToPool(timerObject);
				flash.utils.FlashTimingEngine.currentTimers[timerObject.id] = null;
				delete flash.utils.FlashTimingEngine.currentTimers[timerObject.id];
			}
		} else {
			timerObject.timeLeft -= flash.utils.FlashTimingEngine.lastFrameTime;
		}
	}
	flash.utils.FlashTimingEngine.lastFrameTime = (new Date().getTime() - flash.utils.FlashTimingEngine.startFrameTime);
	if (flash.utils.FlashTimingEngine.frameTime - flash.utils.FlashTimingEngine.lastFrameTime > 0) {
		setTimeout($createStaticDelegate(flash.utils.FlashTimingEngine, flash.utils.FlashTimingEngine.tick), (flash.utils.FlashTimingEngine.frameTime - flash.utils.FlashTimingEngine.lastFrameTime));
		return;
	}
	if (flash.utils.FlashTimingEngine.lastFrameTime < flash.utils.FlashTimingEngine.frameTime)
		flash.utils.FlashTimingEngine.lastFrameTime = flash.utils.FlashTimingEngine.frameTime;
	if (!flash.utils.FlashTimingEngine.stopFlag)
		flash.utils.FlashTimingEngine.frameHandler.request($createStaticDelegate(flash.utils.FlashTimingEngine, flash.utils.FlashTimingEngine.tick));
};

flash.utils.FlashTimingEngine.stop = function() {
	flash.utils.FlashTimingEngine.stopFlag = true;
};

flash.utils.FlashTimingEngine.createTimer = function(time, repeat, callBack) {
	flash.utils.FlashTimingEngine.lastID++;
	if (flash.utils.FlashTimingEngine.availableObjects.length == 0)
		flash.utils.FlashTimingEngine.availableObjects.push(new flash.utils.FlashTimingEngine$TimerObject(flash.utils.FlashTimingEngine.lastID, time, repeat, callBack));
	var t = flash.utils.FlashTimingEngine.availableObjects.pop();
	t.id = flash.utils.FlashTimingEngine.lastID;
	t.time = time;
	t.timeLeft = time;
	t.repeat = repeat;
	t.callBack = callBack;
	flash.utils.FlashTimingEngine.currentTimers[flash.utils.FlashTimingEngine.lastID] = t;
	return flash.utils.FlashTimingEngine.lastID;
};

flash.utils.FlashTimingEngine.addToPool = function(timerObject) {
	flash.utils.FlashTimingEngine.availableObjects.push(timerObject);
};

flash.utils.FlashTimingEngine.stopTimer = function(key) {
	flash.utils.FlashTimingEngine.addToPool(flash.utils.FlashTimingEngine.currentTimers[key]);
	flash.utils.FlashTimingEngine.currentTimers[key] = null;
	delete flash.utils.FlashTimingEngine.currentTimers[key];
};

flash.utils.FlashTimingEngine.logAPIWarning = function(msg) {
	if (flash.utils.FlashTimingEngine.showAPIWarnings)
		console.log(msg);
};

flash.utils.FlashTimingEngine.ENTER_EVENT = new flash.events.Event("enterFrame", false, false);

flash.utils.FlashTimingEngine.TIMER_EVENT = new flash.events.TimerEvent("timer", false, false);

flash.utils.FlashTimingEngine.TIMER_COMPLETE_EVENT = new flash.events.TimerEvent("timerComplete", false, false);

flash.utils.FlashTimingEngine.root;

flash.utils.FlashTimingEngine.frameTime;

flash.utils.FlashTimingEngine.framePerSecond;

flash.utils.FlashTimingEngine.startFrameTime = 0;

flash.utils.FlashTimingEngine.lastFrameTime = 0;

flash.utils.FlashTimingEngine.currentTimers = new flash.utils.Dictionary(false);

flash.utils.FlashTimingEngine.stopFlag = false;

flash.utils.FlashTimingEngine.lastID = 0;

flash.utils.FlashTimingEngine.availableObjects = [];

flash.utils.FlashTimingEngine.currentTime = 0;

flash.utils.FlashTimingEngine.showAPIWarnings = true;

flash.utils.FlashTimingEngine.className = "flash.utils.FlashTimingEngine";

flash.utils.FlashTimingEngine.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.display.BitmapData');
	p.push('flash.media.Sound');
	p.push('trace');
	p.push('flash.display.Stage');
	p.push('flash.utils.FlashTimingEngine');
	p.push('flash.events.EventDispatcher');
	p.push('flash.utils.RequestAnimationFrame');
	p.push('flash.events.Event');
	p.push('flash.net.URLRequest');
	return p;
};

flash.utils.FlashTimingEngine.getStaticDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.utils.Dictionary');
	p.push('flash.events.Event');
	p.push('flash.events.TimerEvent');
	return p;
};

flash.utils.FlashTimingEngine.injectionPoints = function(t) {
	return [];
};
flash.utils.FlashTimingEngine$TimerObject = function(id, time, repeat, callBack) {
	this.timeLeft = 0;
	this.time = time;
	this.timeLeft = time;
	this.repeat = repeat;
	this.callBack = callBack;
};


// ====================================================
// flash.geom.Transform
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.geom == "undefined")
	flash.geom = {};

flash.geom.Transform = function() {
this.colorTransform = null;
};

flash.geom.Transform.className = "flash.geom.Transform";

flash.geom.Transform.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.geom.Transform.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.geom.Transform.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.text.TextFormatAlign
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.text == "undefined")
	flash.text = {};

flash.text.TextFormatAlign = function() {
};

flash.text.TextFormatAlign.CENTER = "center";

flash.text.TextFormatAlign.LEFT = "left";

flash.text.TextFormatAlign.RIGHT = "right";

flash.text.TextFormatAlign.className = "flash.text.TextFormatAlign";

flash.text.TextFormatAlign.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.text.TextFormatAlign.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.text.TextFormatAlign.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.profiler.showRedrawRegions
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.profiler == "undefined")
	flash.profiler = {};

flash.profiler.showRedrawRegions = function() {
};

flash.profiler.showRedrawRegions.className = "flash.profiler.showRedrawRegions";

flash.profiler.showRedrawRegions.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.profiler.showRedrawRegions.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.profiler.showRedrawRegions.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.display3D.Context3DTriangleFace
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display3D == "undefined")
	flash.display3D = {};

flash.display3D.Context3DTriangleFace = function() {
};

flash.display3D.Context3DTriangleFace.BACK = "back";

flash.display3D.Context3DTriangleFace.FRONT = "front";

flash.display3D.Context3DTriangleFace.FONT_AND_BACK = "fontAndBack";

flash.display3D.Context3DTriangleFace.NONE = "none";

flash.display3D.Context3DTriangleFace.className = "flash.display3D.Context3DTriangleFace";

flash.display3D.Context3DTriangleFace.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.Context3DTriangleFace.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.Context3DTriangleFace.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.utils.Endian
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.Endian = function() {
	
};

flash.utils.Endian.BIG_ENDIAN = "bigEndian";

flash.utils.Endian.LITTLE_ENDIAN = "littleEndian";

flash.utils.Endian.className = "flash.utils.Endian";

flash.utils.Endian.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.utils.Endian.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.Endian.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.system.ApplicationDomain
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.system == "undefined")
	flash.system = {};

flash.system.ApplicationDomain = function(parentDomain) {
};

flash.system.ApplicationDomain.get_MIN_DOMAIN_MEMORY_LENGTH = function() {
	return 0;
};

flash.system.ApplicationDomain.cD;

flash.system.ApplicationDomain.get_currentDomain = function() {
	return {};
};

flash.system.ApplicationDomain.prototype.get_domainMemory = function() {
	return new flash.utils.ByteArray(128);
};

flash.system.ApplicationDomain.prototype.set_domainMemory = function(value) {
	FlashAPILoggeer.log("ApplicationDomain::set domainMemory: " + value);
	FlashAPILoggeer.log("ApplicationDomain::set domainMemory: " + value.get_length());
};

flash.system.ApplicationDomain.prototype.hasDefinition = function(name) {
	return true;
};

flash.system.ApplicationDomain.prototype.getDefinition = function(name) {
	return {};
};

flash.system.ApplicationDomain.className = "flash.system.ApplicationDomain";

flash.system.ApplicationDomain.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.utils.ByteArray');
	p.push('FlashAPILoggeer');
	return p;
};

flash.system.ApplicationDomain.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.system.ApplicationDomain.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'parentDomain', t:'Object'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.events.EventDispatcher
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.EventDispatcher = function(target) {
	this.listeners = new flash.utils.Dictionary(false);
	this._name = "";
	this._target = null;
	this.queueEvents = new flash.utils.Dictionary(false);
	this._target = target;
	this._name = "instanceED" + flash.events.EventDispatcher.count++;
};

flash.events.EventDispatcher.fireGlobalEvent = function(event) {
	if (!flash.events.EventDispatcher.staticListeners)
		flash.events.EventDispatcher.staticListeners = new flash.utils.Dictionary(false);
	if (flash.events.EventDispatcher.staticListeners[event.get_type()]) {
		var arr = flash.events.EventDispatcher.staticListeners[event.get_type()];
		if (arr == null)
			return;
		for (var i = 0; i < arr.length; i++) {
			if (arr[i].listener != null) {
				arr[i].listener.apply(arr[i].instance, [event]);
			}
			if (event.get_bubbles() && arr[i].instance instanceof flash.display.DisplayObjectContainer) {
				var doc = arr[i].instance;
				doc.bubbleEvent(event);
			}
		}
	}
};

flash.events.EventDispatcher.staticListeners;

flash.events.EventDispatcher.count = 1;

flash.events.EventDispatcher.prototype.addEventListener = function(type, listener, useCapture, priority, useWeakReference) {
	if (!this.listeners[type]) {
		this.listeners[type] = [];
	}
	if (type == "enterFrame") {
		if (!flash.events.EventDispatcher.staticListeners)
			flash.events.EventDispatcher.staticListeners = new flash.utils.Dictionary(false);
		if (!flash.events.EventDispatcher.staticListeners[type])
			flash.events.EventDispatcher.staticListeners[type] = [];
		flash.events.EventDispatcher.staticListeners[type].push({instance:this, listener:listener, priority:priority});
	}
	var l;
	var i;
	var indexOfPriority = 0;
	l = this.listeners[type].length;
	for (i = 0; i < l; i++) {
		if (this.listeners[type][i].priority >= priority)
			indexOfPriority = i + 1;
		if (this.listeners[type][i].listener == listener)
			return;
	}
	if (indexOfPriority < l)
		this.listeners[type].splice(indexOfPriority, 0, {listener:listener, priority:priority});
	else
		this.listeners[type].push({listener:listener, priority:priority});
	if (this.queueEvents[type]) {
		while (this.queueEvents[type].length > 0)
			this.dispatchEvent(this.queueEvents[type].shift());
	}
};

flash.events.EventDispatcher.prototype.hasEventListener = function(type) {
	return this.listeners[type] && this.listeners[type].length > 0;
};

flash.events.EventDispatcher.prototype.willTrigger = function(type) {
	return this.listeners[type] && this.listeners[type].length > 0;
};

flash.events.EventDispatcher.prototype.removeEventListener = function(type, listener, useCapture) {
	if (!flash.events.EventDispatcher.staticListeners)
		flash.events.EventDispatcher.staticListeners = new flash.utils.Dictionary(false);
	if (!this.listeners[type]) {
		return;
	}
	var l;
	var i;
	if (type == "enterFrame") {
		l = flash.events.EventDispatcher.staticListeners[type].length;
		for (i = 0; i < l; i++) {
			if (flash.events.EventDispatcher.staticListeners[type][i].listener == listener) {
				flash.events.EventDispatcher.staticListeners[type].splice(i, 1);
				break;
			}
		}
	}
	l = this.listeners[type].length;
	for (i = 0; i < l; i++) {
		if (this.listeners[type][i].listener == listener) {
			this.listeners[type].splice(i, 1);
			return;
		}
	}
};

flash.events.EventDispatcher.prototype.dispatchEvent = function(event) {
	if (this.listeners[event.get_type()]) {
		var arr = this.listeners[event.get_type()];
		if (arr == null)
			return false;
		event.target = this;
		for (var i = 0; i < arr.length; i++) {
			if (arr[i].listener != null)
				arr[i].listener.apply(this, [event]);
			if (event.get_bubbles() && this instanceof flash.display.DisplayObjectContainer) {
				var doc = this;
				doc.bubbleEvent(event);
			}
		}
	} else {
		if (!this.queueEvents[event.get_type()])
			this.queueEvents[event.get_type()] = [];
		this.queueEvents[event.get_type()].push(event);
	}
	return true;
};

flash.events.EventDispatcher.prototype.toString = function() {
	return this._name;
};

flash.events.EventDispatcher.className = "flash.events.EventDispatcher";

flash.events.EventDispatcher.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.utils.Dictionary');
	return p;
};

flash.events.EventDispatcher.getStaticDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.utils.Dictionary');
	return p;
};

flash.events.EventDispatcher.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'target', t:'flash.events.IEventDispatcher'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.utils.Timer
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.Timer = function(delay, repeatCount) {
	this.id = 0;
	flash.events.EventDispatcher.call(this);
	this.delay = delay;
	this.repeatCount = repeatCount;
};

flash.utils.Timer.prototype.start = function() {
	this.id = 1;
};

flash.utils.Timer.prototype.stop = function() {
};

$inherit(flash.utils.Timer, flash.events.EventDispatcher);

flash.utils.Timer.className = "flash.utils.Timer";

flash.utils.Timer.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.utils.Timer.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.Timer.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'delay', t:'Number'});
			p.push({n:'repeatCount', t:'int'});
			break;
		case 1:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 2:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 3:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.net.NetConnection
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.net == "undefined")
	flash.net = {};

flash.net.NetConnection = function(target) {
	flash.events.EventDispatcher.call(this, target);
};

flash.net.NetConnection.prototype.connect = function(command, args) {
};

flash.net.NetConnection.prototype.close = function() {
};

$inherit(flash.net.NetConnection, flash.events.EventDispatcher);

flash.net.NetConnection.className = "flash.net.NetConnection";

flash.net.NetConnection.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.net.NetConnection.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.net.NetConnection.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'target', t:'flash.events.IEventDispatcher'});
			break;
		case 1:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 2:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 3:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.DisplayObject
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.DisplayObject = function() {
	this.scaleX = 1;
	this.scaleY = 1;
	this.mask = null;
	this._x = 0;
	this.transform = null;
	this._y = 0;
	this._height = 0;
	this.name = "";
	this.alpha = 0.0;
	this._visible = true;
	this.domElement = null;
	this._parent2 = null;
	this.rect = new flash.geom.Rectangle(0, 0, 0, 0);
	this.cacheAsBitmap = false;
	this._mouseX = 0;
	this._mouseY = 0;
	this.loaderInfo = new flash.display.LoaderInfo();
	this._width = 0;
	this.p = new flash.geom.Point(0, 0);
	this._rotation = 0;
	this.filters = [];
	flash.events.EventDispatcher.call(this);
	this.name = "Instance" + flash.display.DisplayObject.instanceCounter++;
	this.transform = new flash.geom.Transform();
};

flash.display.DisplayObject.prototype.get_visible = function() {
	return this._visible;
};

flash.display.DisplayObject.prototype.set_visible = function(value) {
	this._visible = value;
};

flash.display.DisplayObject.instanceCounter = 0;

flash.display.DisplayObject.prototype.get_mouseY = function() {
	return this._mouseY;
};

flash.display.DisplayObject.prototype.set_mouseY = function(value) {
	this._mouseY = value;
};

flash.display.DisplayObject.prototype.get_mouseX = function() {
	return this._mouseX;
};

flash.display.DisplayObject.prototype.set_mouseX = function(value) {
	this._mouseX = value;
};

flash.display.DisplayObject.prototype.get_parent = function() {
	return this._parent2;
};

flash.display.DisplayObject.prototype.get_rotation = function() {
	return this._rotation;
};

flash.display.DisplayObject.prototype.set_rotation = function(value) {
	this._rotation = value;
};

flash.display.DisplayObject.prototype.get_stage = function() {
	return flash.utils.FlashTimingEngine.stageInstance;
};

flash.display.DisplayObject.prototype.get_width = function() {
	return this._width;
};

flash.display.DisplayObject.prototype.set_width = function(value) {
	this._width = value;
};

flash.display.DisplayObject.prototype.get_height = function() {
	return this._height;
};

flash.display.DisplayObject.prototype.set_height = function(value) {
	this._height = value;
};

flash.display.DisplayObject.prototype.get_x = function() {
	return this._x;
};

flash.display.DisplayObject.prototype.set_x = function(value) {
	this._x = value;
};

flash.display.DisplayObject.prototype.get_y = function() {
	return this._y;
};

flash.display.DisplayObject.prototype.set_y = function(value) {
	this._y = value;
};

flash.display.DisplayObject.prototype.getRect = function(targetCoordinateSpace) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: DisplayObject.getRect() $$$$");
	return new flash.geom.Rectangle(0, 0, 10, 10);
};

flash.display.DisplayObject.prototype.localToGlobal = function(point) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: DisplayObject.localToGlobal() $$$$");
	return this.p;
};

flash.display.DisplayObject.prototype.getBounds = function(targetCoordinateSpace) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: DisplayObject.getBounds() $$$$");
	return this.rect;
};

flash.display.DisplayObject.prototype.hitTestPoint = function(x, y, shapeFlag) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: DisplayObject.hitTestPoint() $$$$");
	return true;
};

flash.display.DisplayObject.prototype.toString = function() {
	return this.name;
};

$inherit(flash.display.DisplayObject, flash.events.EventDispatcher);

flash.display.DisplayObject.className = "flash.display.DisplayObject";

flash.display.DisplayObject.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.geom.Rectangle');
	p.push('flash.utils.FlashTimingEngine');
	p.push('flash.geom.Transform');
	return p;
};

flash.display.DisplayObject.getStaticDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.display.LoaderInfo');
	p.push('flash.geom.Rectangle');
	p.push('flash.geom.Point');
	return p;
};

flash.display.DisplayObject.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 2:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 3:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.InteractiveObject
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.InteractiveObject = function() {
this.mouseEnabled = false;
this.tabEnabled = false;
flash.display.DisplayObject.call(this);
};

$inherit(flash.display.InteractiveObject, flash.display.DisplayObject);

flash.display.InteractiveObject.className = "flash.display.InteractiveObject";

flash.display.InteractiveObject.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.InteractiveObject.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.InteractiveObject.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.display.DisplayObject.injectionPoints(t);
			break;
		case 2:
			p = flash.display.DisplayObject.injectionPoints(t);
			break;
		case 3:
			p = flash.display.DisplayObject.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.DisplayObjectContainer
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.DisplayObjectContainer = function() {
this.mouseChildren = false;
this.children = [];
this.tabChildren = false;
flash.display.InteractiveObject.call(this);
};

flash.display.DisplayObjectContainer.prototype.get_numChildren = function() {
	return this.children.length;
};

flash.display.DisplayObjectContainer.prototype.addChild = function(child) {
	child._parent2 = this;
	this.children.push(child);
	if (child.domElement) {
		var element = (!this.domElement || !this.get_parent()) ? document.body : this.domElement;
		element.appendChild(child.domElement);
	}
	return child;
};

flash.display.DisplayObjectContainer.prototype.addChildAt = function(child, index) {
	child._parent2 = this;
	this.children = this.children.splice(index, 0, child);
	return child;
};

flash.display.DisplayObjectContainer.prototype.getChildAt = function(index) {
	for (var i = 0; i < this.children.length; i++) {
		if (i == index)
			return this.children[i];
	}
	return null;
};

flash.display.DisplayObjectContainer.prototype.getChildIndex = function(child) {
	for (var i = 0; i < this.children.length; i++) {
		if (this.children[i] == child)
			return i;
	}
	return -1;
};

flash.display.DisplayObjectContainer.prototype.getChildByName = function(name) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: DisplayObjectContainer.getChildByName() $$$$");
	return null;
};

flash.display.DisplayObjectContainer.prototype.setChildIndex = function(child, index) {
	this.removeChild(child);
	this.addChildAt(child, index);
};

flash.display.DisplayObjectContainer.prototype.swapChildren = function(child1, child2) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: DisplayObjectContainer.swapChildren() $$$$");
};

flash.display.DisplayObjectContainer.prototype.swapChildrenAt = function(index1, index2) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: DisplayObjectContainer.swapChildrenAt() $$$$");
};

flash.display.DisplayObjectContainer.prototype.contains = function(child) {
	return this.getChildIndex(child) > -1;
};

flash.display.DisplayObjectContainer.prototype.removeChild = function(child) {
	child._parent2 = null;
	for (var i = 0; i < this.children.length; i++) {
		if (this.children[i] == child) {
			return this.removeChildAt(i);
		}
	}
	return child;
};

flash.display.DisplayObjectContainer.prototype.removeChildAt = function(index) {
	var c = this.children[index];
	c._parent2 = null;
	this.children.splice(index, 1);
	return c;
};

flash.display.DisplayObjectContainer.prototype.bubbleEvent = function(event) {
	for (var i = 0; i < this.children.length; i++) {
		if (this.children[i] instanceof flash.events.EventDispatcher)
			this.children[i].dispatchEvent(event);
	}
};

$inherit(flash.display.DisplayObjectContainer, flash.display.InteractiveObject);

flash.display.DisplayObjectContainer.className = "flash.display.DisplayObjectContainer";

flash.display.DisplayObjectContainer.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.utils.FlashTimingEngine');
	p.push('Object');
	return p;
};

flash.display.DisplayObjectContainer.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.DisplayObjectContainer.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.display.InteractiveObject.injectionPoints(t);
			break;
		case 2:
			p = flash.display.InteractiveObject.injectionPoints(t);
			break;
		case 3:
			p = flash.display.InteractiveObject.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.Loader
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.Loader = function() {
	this.content = null;
	this.contentLoaderInfo = null;
	this.contentLoaderInfo = new flash.display.LoaderInfo();
	flash.display.DisplayObjectContainer.call(this);
};

flash.display.Loader.prototype.close = function() {
};

flash.display.Loader.prototype.load = function(request, context) {
};

flash.display.Loader.prototype.loadBytes = function(bytes, context) {
};

flash.display.Loader.prototype.unload = function() {
};

flash.display.Loader.prototype.unloadAndStop = function(gc) {
};

$inherit(flash.display.Loader, flash.display.DisplayObjectContainer);

flash.display.Loader.className = "flash.display.Loader";

flash.display.Loader.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.display.LoaderInfo');
	return p;
};

flash.display.Loader.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.Loader.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.display.DisplayObjectContainer.injectionPoints(t);
			break;
		case 2:
			p = flash.display.DisplayObjectContainer.injectionPoints(t);
			break;
		case 3:
			p = flash.display.DisplayObjectContainer.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.Sprite
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.Sprite = function() {
	this.useHandCursor = false;
	this.buttonMode = false;
	this.hitArea = null;
	this._graphics = null;
	flash.display.DisplayObjectContainer.call(this);
};

flash.display.Sprite.prototype.get_graphics = function() {
	if (!this._graphics)
		this._graphics = new flash.display.Graphics();
	return this._graphics;
};

$inherit(flash.display.Sprite, flash.display.DisplayObjectContainer);

flash.display.Sprite.className = "flash.display.Sprite";

flash.display.Sprite.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.display.Graphics');
	return p;
};

flash.display.Sprite.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.Sprite.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.display.DisplayObjectContainer.injectionPoints(t);
			break;
		case 2:
			p = flash.display.DisplayObjectContainer.injectionPoints(t);
			break;
		case 3:
			p = flash.display.DisplayObjectContainer.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.MovieClip
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.MovieClip = function() {
this.currentFrame = 0;
flash.display.Sprite.call(this);
};

flash.display.MovieClip.prototype.gotoAndPlay = function(frame, scene) {
};

flash.display.MovieClip.prototype.gotoAndStop = function(frame, scene) {
};

flash.display.MovieClip.prototype.play = function() {
};

flash.display.MovieClip.prototype.stop = function() {
};

$inherit(flash.display.MovieClip, flash.display.Sprite);

flash.display.MovieClip.className = "flash.display.MovieClip";

flash.display.MovieClip.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.MovieClip.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.MovieClip.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.display.Sprite.injectionPoints(t);
			break;
		case 2:
			p = flash.display.Sprite.injectionPoints(t);
			break;
		case 3:
			p = flash.display.Sprite.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.Stage
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.Stage = function() {
	this.stageWidth = 0;
	this.stageHeight = 0;
	this._stage3Ds = null;
	flash.display.DisplayObjectContainer.call(this);
};

flash.display.Stage.prototype.get_stage3Ds = function() {
	if (!this._stage3Ds) {
		this._stage3Ds = [];
		this._stage3Ds.push(new flash.display.Stage3D());
	}
	return this._stage3Ds;
};

$inherit(flash.display.Stage, flash.display.DisplayObjectContainer);

flash.display.Stage.className = "flash.display.Stage";

flash.display.Stage.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.display.Stage3D');
	return p;
};

flash.display.Stage.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.Stage.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.display.DisplayObjectContainer.injectionPoints(t);
			break;
		case 2:
			p = flash.display.DisplayObjectContainer.injectionPoints(t);
			break;
		case 3:
			p = flash.display.DisplayObjectContainer.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.SimpleButton
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.SimpleButton = function() {
	flash.display.DisplayObjectContainer.call(this);
};

$inherit(flash.display.SimpleButton, flash.display.DisplayObjectContainer);

flash.display.SimpleButton.className = "flash.display.SimpleButton";

flash.display.SimpleButton.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.SimpleButton.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.SimpleButton.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.display.DisplayObjectContainer.injectionPoints(t);
			break;
		case 2:
			p = flash.display.DisplayObjectContainer.injectionPoints(t);
			break;
		case 3:
			p = flash.display.DisplayObjectContainer.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.text.TextField
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.text == "undefined")
	flash.text = {};

flash.text.TextField = function() {
	this.textHeight = 0;
	this.borderColor = 0;
	this.backgroundColor = 0;
	this.autoSize = "";
	this.wordWrap = false;
	this.maxChars = 0;
	this.selectionEndIndex = 0;
	this.type = "";
	this.selectionBeginIndex = 0;
	this.textNode = null;
	this._text = "";
	this.htmlText = "";
	this.defaultTextFormat = null;
	this.border = false;
	this.antiAliasType = "";
	this.embedFonts = false;
	this.textColor = 0;
	this.textWidth = 0;
	this.restrict = "";
	this.selectable = false;
	this.multiline = false;
	this.background = false;
	flash.display.InteractiveObject.call(this);
	this.textNode = document.createTextNode();
	this.domElement = document.createElement("div");
	this.domElement.appendChild(this.textNode);
};

flash.text.TextField.prototype.get_text = function() {
	return this._text;
};

flash.text.TextField.prototype.set_text = function(value) {
	this._text = value;
	this.textNode.data = this._text;
};

flash.text.TextField.prototype.getTextFormat = function(beginIndex, endIndex) {
	return new flash.text.TextFormat();
};

flash.text.TextField.prototype.setTextFormat = function(format, beginIndex, endIndex) {
};

flash.text.TextField.prototype.setSelection = function(beginIndex, endIndex) {
};

flash.text.TextField.prototype.appendText = function(newText) {
	this.set_text(this.get_text() + newText);
};

$inherit(flash.text.TextField, flash.display.InteractiveObject);

flash.text.TextField.className = "flash.text.TextField";

flash.text.TextField.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.text.TextFormat');
	return p;
};

flash.text.TextField.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.text.TextField.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.display.InteractiveObject.injectionPoints(t);
			break;
		case 2:
			p = flash.display.InteractiveObject.injectionPoints(t);
			break;
		case 3:
			p = flash.display.InteractiveObject.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.Bitmap
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.Bitmap = function(bitmapData, pixelSnapping, smoothing) {
	this.pixelsnapping = "";
	this.blendMode = "";
	this.bitmapData = bitmapData;
	flash.display.DisplayObject.call(this);
};

$inherit(flash.display.Bitmap, flash.display.DisplayObject);

flash.display.Bitmap.className = "flash.display.Bitmap";

flash.display.Bitmap.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.Bitmap.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.Bitmap.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'bitmapData', t:'flash.display.BitmapData'});
			p.push({n:'pixelSnapping', t:'String'});
			p.push({n:'smoothing', t:'Boolean'});
			break;
		case 1:
			p = flash.display.DisplayObject.injectionPoints(t);
			break;
		case 2:
			p = flash.display.DisplayObject.injectionPoints(t);
			break;
		case 3:
			p = flash.display.DisplayObject.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// mx.core.BitmapAsset
// ====================================================

if (typeof mx == "undefined")
	var mx = {};
if (typeof mx.core == "undefined")
	mx.core = {};

mx.core.BitmapAsset = function(bitmapData, pixelSnapping, smoothing) {
	flash.display.Bitmap.call(this, (bitmapData == null) ? new flash.display.BitmapData(11, 11, true, 0) : bitmapData, pixelSnapping, smoothing);
};

$inherit(mx.core.BitmapAsset, flash.display.Bitmap);

mx.core.BitmapAsset.className = "mx.core.BitmapAsset";

mx.core.BitmapAsset.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.display.BitmapData');
	return p;
};

mx.core.BitmapAsset.getStaticDependencies = function(t) {
	var p;
	return [];
};

mx.core.BitmapAsset.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'bitmapData', t:'flash.display.BitmapData'});
			p.push({n:'pixelSnapping', t:'String'});
			p.push({n:'smoothing', t:'Boolean'});
			break;
		case 1:
			p = flash.display.Bitmap.injectionPoints(t);
			break;
		case 2:
			p = flash.display.Bitmap.injectionPoints(t);
			break;
		case 3:
			p = flash.display.Bitmap.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.media.Video
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.media == "undefined")
	flash.media = {};

flash.media.Video = function() {
flash.display.DisplayObject.call(this);
};

flash.media.Video.prototype.attachNetStream = function(netStream) {
};

$inherit(flash.media.Video, flash.display.DisplayObject);

flash.media.Video.className = "flash.media.Video";

flash.media.Video.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.media.Video.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.media.Video.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.display.DisplayObject.injectionPoints(t);
			break;
		case 2:
			p = flash.display.DisplayObject.injectionPoints(t);
			break;
		case 3:
			p = flash.display.DisplayObject.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.Shape
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.Shape = function() {
this._graphics = null;
flash.display.DisplayObject.call(this);
};

flash.display.Shape.prototype.get_graphics = function() {
	if (!this._graphics)
		this._graphics = new flash.display.Graphics();
	return this._graphics;
};

$inherit(flash.display.Shape, flash.display.DisplayObject);

flash.display.Shape.className = "flash.display.Shape";

flash.display.Shape.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.display.Graphics');
	return p;
};

flash.display.Shape.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.Shape.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.display.DisplayObject.injectionPoints(t);
			break;
		case 2:
			p = flash.display.DisplayObject.injectionPoints(t);
			break;
		case 3:
			p = flash.display.DisplayObject.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.ui.ContextMenu
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.ui == "undefined")
	flash.ui = {};

flash.ui.ContextMenu = function() {
	this.customItems = [];
	flash.events.EventDispatcher.call(this);
};

flash.ui.ContextMenu.prototype.hideBuiltInItems = function() {
};

$inherit(flash.ui.ContextMenu, flash.events.EventDispatcher);

flash.ui.ContextMenu.className = "flash.ui.ContextMenu";

flash.ui.ContextMenu.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.ui.ContextMenu.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.ui.ContextMenu.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 2:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 3:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.Stage3D
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.Stage3D = function() {
	this._x = 0;
	this._y = 0;
	this._context3D = null;
	flash.events.EventDispatcher.call(this);
};

flash.display.Stage3D.prototype.get_context3D = function() {
	return this._context3D;
};

flash.display.Stage3D.prototype.get_x = function() {
	return this._x;
};

flash.display.Stage3D.prototype.set_x = function(value) {
	this._x = value;
};

flash.display.Stage3D.prototype.get_y = function() {
	return this._y;
};

flash.display.Stage3D.prototype.set_y = function(value) {
	this._y = value;
};

flash.display.Stage3D.prototype.requestContext3D = function(context3DRenderMode, profile) {
	trace("Stage3D");
	var canvas = document.createElement("canvas");
	try {
		var context = canvas.getContext("webgl", {alpha:false}) || canvas.getContext("experimental-webgl", {alpha:false});
	} catch (error) {
	}
	if (context) {
		this._context3D = new flash.display3D.Context3D();
		this._context3D.canvas = canvas;
		flash.utils.FlashTimingEngine.setupStageInteractionEvents(canvas);
		this._context3D.webglContext = context;
		document.body.appendChild(canvas);
		this.dispatchEvent(new flash.events.Event("context3DCreate", false, false));
	} else {
		this.dispatchEvent(new flash.events.ErrorEvent("error", false, false, "No Context Available", 0));
	}
};

$inherit(flash.display.Stage3D, flash.events.EventDispatcher);

flash.display.Stage3D.className = "flash.display.Stage3D";

flash.display.Stage3D.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('trace');
	p.push('flash.events.ErrorEvent');
	p.push('flash.utils.FlashTimingEngine');
	p.push('flash.display3D.Context3D');
	p.push('flash.events.Event');
	return p;
};

flash.display.Stage3D.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.Stage3D.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 2:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 3:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.ui.ContextMenuItem
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.ui == "undefined")
	flash.ui = {};

flash.ui.ContextMenuItem = function(caption, separatorBefore, enabled, visible) {
	flash.events.EventDispatcher.call(this);
};

$inherit(flash.ui.ContextMenuItem, flash.events.EventDispatcher);

flash.ui.ContextMenuItem.className = "flash.ui.ContextMenuItem";

flash.ui.ContextMenuItem.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.ui.ContextMenuItem.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.ui.ContextMenuItem.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'caption', t:'String'});
			p.push({n:'separatorBefore', t:'Boolean'});
			p.push({n:'enabled', t:'Boolean'});
			p.push({n:'visible', t:'Boolean'});
			break;
		case 1:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 2:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 3:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.media.SoundChannel
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.media == "undefined")
	flash.media = {};

flash.media.SoundChannel = function() {
	this.position = 0;
	this.soundTransform = null;
	flash.events.EventDispatcher.call(this);
	this.soundTransform = new flash.media.SoundTransform(1, 0);
	flash.media.SoundMixer.get_soundTransform().addTransform(this.soundTransform);
};

flash.media.SoundChannel.prototype.stop = function() {
	if (this.soundTransform.buffer)
		this.soundTransform.buffer.stop(0);
};

$inherit(flash.media.SoundChannel, flash.events.EventDispatcher);

flash.media.SoundChannel.className = "flash.media.SoundChannel";

flash.media.SoundChannel.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.media.SoundMixer');
	p.push('flash.media.SoundTransform');
	return p;
};

flash.media.SoundChannel.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.media.SoundChannel.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 2:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 3:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display3D.textures.TextureBase
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display3D == "undefined")
	flash.display3D = {};
if (typeof flash.display3D.textures == "undefined")
	flash.display3D.textures = {};

flash.display3D.textures.TextureBase = function(target) {
	this.context3D = null;
	this._webglTexture = null;
	flash.events.EventDispatcher.call(this, target);
};

flash.display3D.textures.TextureBase.prototype.dispose = function() {
};

$inherit(flash.display3D.textures.TextureBase, flash.events.EventDispatcher);

flash.display3D.textures.TextureBase.className = "flash.display3D.textures.TextureBase";

flash.display3D.textures.TextureBase.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.textures.TextureBase.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.textures.TextureBase.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'target', t:'flash.events.IEventDispatcher'});
			break;
		case 1:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 2:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 3:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display3D.textures.Texture
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display3D == "undefined")
	flash.display3D = {};
if (typeof flash.display3D.textures == "undefined")
	flash.display3D.textures = {};

flash.display3D.textures.Texture = function() {
	flash.display3D.textures.TextureBase.call(this);
};

flash.display3D.textures.Texture.prototype.uploadCompressedTextureFromByteArray = function(data, byteArrayOffset, async) {
};

flash.display3D.textures.Texture.prototype.uploadFromBitmapData = function(source, miplevel) {
	trace("Stage3D Texture.uploadFromBitmapData TEXTURE");
	if (miplevel > 0)
		return;
	if (!this._webglTexture)
		this._webglTexture = this.context3D.webglContext.createTexture();
	if (!source.image) {
		flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Texture.uploadFromBitmapData() - NO IMAGE DATA $$$$");
	}
	var gl = this.context3D.webglContext;
	gl.bindTexture(3553, this._webglTexture);
	gl.pixelStorei(37441, true);
	gl.texImage2D(3553, 0, 6408, 6408, 5121, source.image);
	gl.texParameteri(3553, 10240, 9729);
	gl.texParameteri(3553, 10241, 9729);
	gl.texParameteri(3553, 10242, 10497);
	gl.texParameteri(3553, 10243, 10497);
	gl.bindTexture(3553, null);
};

$inherit(flash.display3D.textures.Texture, flash.display3D.textures.TextureBase);

flash.display3D.textures.Texture.className = "flash.display3D.textures.Texture";

flash.display3D.textures.Texture.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.display.BitmapData');
	p.push('trace');
	p.push('flash.utils.FlashTimingEngine');
	return p;
};

flash.display3D.textures.Texture.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.textures.Texture.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.display3D.textures.TextureBase.injectionPoints(t);
			break;
		case 2:
			p = flash.display3D.textures.TextureBase.injectionPoints(t);
			break;
		case 3:
			p = flash.display3D.textures.TextureBase.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.LoaderInfo
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.LoaderInfo = function() {
	this.url = "redshell";
	this.parameters = {};
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	flash.events.EventDispatcher.call(this);
};

$inherit(flash.display.LoaderInfo, flash.events.EventDispatcher);

flash.display.LoaderInfo.className = "flash.display.LoaderInfo";

flash.display.LoaderInfo.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.LoaderInfo.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.LoaderInfo.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 2:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 3:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.net.URLStream
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.net == "undefined")
	flash.net = {};

flash.net.URLStream = function() {
	this.connected = true;
	flash.events.EventDispatcher.call(this);
};

flash.net.URLStream.prototype.load = function(request) {
};

flash.net.URLStream.prototype.close = function() {
};

$inherit(flash.net.URLStream, flash.events.EventDispatcher);

flash.net.URLStream.className = "flash.net.URLStream";

flash.net.URLStream.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.net.URLStream.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.net.URLStream.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 2:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 3:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.net.NetStream
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.net == "undefined")
	flash.net = {};

flash.net.NetStream = function(target) {
	this.client = null;
	this.inBufferSeek = false;
	this.time = 0;
	this.soundTransform = new flash.media.SoundTransform(1, 0);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	flash.events.EventDispatcher.call(this, target);
};

flash.net.NetStream.prototype.attach = function(connection) {
};

flash.net.NetStream.prototype.play = function(args) {
};

flash.net.NetStream.prototype.seek = function(offset) {
};

flash.net.NetStream.prototype.close = function() {
};

$inherit(flash.net.NetStream, flash.events.EventDispatcher);

flash.net.NetStream.className = "flash.net.NetStream";

flash.net.NetStream.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.net.NetStream.getStaticDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.media.SoundTransform');
	return p;
};

flash.net.NetStream.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'target', t:'flash.events.IEventDispatcher'});
			break;
		case 1:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 2:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 3:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display3D.Context3D
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display3D == "undefined")
	flash.display3D = {};

flash.display3D.Context3D = function() {
	this.projectionMatrix = null;
	this.lastVertexBuffer = null;
	this.lastProgram = null;
	this.canvas = null;
	this.webglContext = null;
	this.enableErrorChecking = false;
	flash.events.EventDispatcher.call(this);
};

flash.display3D.Context3D.prototype.get_driverInfo = function() {
	return "WebGL Port In Progress";
};

flash.display3D.Context3D.prototype.clear = function(red, green, blue, alpha, depth, stencil, mask) {
	this.webglContext.clearColor(red, green, blue, alpha);
	this.webglContext.clear(16384);
};

flash.display3D.Context3D.prototype.configureBackBuffer = function(width, height, antiAlias, enableDepthAndStencil, wantsBestResolution) {
	trace("Context3D CHANGE BACK BUFFER (OR VIEWPORT?) w\/h: " + width + "\/" + height);
	this.webglContext.disable(2929);
	this.webglContext.disable(2884);
	this.webglContext.enable(3042);
	this.webglContext.colorMask(true, true, true, false);
	this.canvas.width = width;
	this.canvas.height = height;
	this.webglContext.viewport(0, 0, width, height);
};

flash.display3D.Context3D.prototype.createIndexBuffer = function(numIndices) {
	var indexBuffer = new flash.display3D.IndexBuffer3D();
	indexBuffer.context3D = this;
	indexBuffer.buffer = this.webglContext.createBuffer();
	this.webglContext.bindBuffer(34963, indexBuffer.buffer);
	return indexBuffer;
};

flash.display3D.Context3D.prototype.createProgram = function() {
	if (this.lastProgram)
		return this.lastProgram;
	var program = new flash.display3D.Program3D();
	program.context3D = this;
	this.lastProgram = program;
	return program;
};

flash.display3D.Context3D.prototype.createTexture = function(width, height, format, optimizeForRenderToTexture, streamingLevels) {
	var texture = new flash.display3D.textures.Texture();
	texture.context3D = this;
	return texture;
};

flash.display3D.Context3D.prototype.createVertexBuffer = function(numVertices, data32PerVertex) {
	var vertexBuffer = new flash.display3D.VertexBuffer3D();
	vertexBuffer.context3D = this;
	vertexBuffer.buffer = this.webglContext.createBuffer();
	vertexBuffer.elementsPerVertex = data32PerVertex;
	this.webglContext.bindBuffer(34962, vertexBuffer.buffer);
	return vertexBuffer;
};

flash.display3D.Context3D.prototype.dispose = function() {
};

flash.display3D.Context3D.prototype.drawTriangles = function(indexBuffer, firstIndex, numTriangles) {
	trace("Context3D::drawTriangles: indexBuffer: " + indexBuffer.buffer + " - " + firstIndex + " - " + numTriangles);
	this.webglContext.bindBuffer(34963, indexBuffer.buffer);
	this.webglContext.drawElements(4, numTriangles * 3, 5123, 0);
};

flash.display3D.Context3D.prototype.present = function() {
	this.webglContext.colorMask(true, true, true, false);
	this.webglContext.bindFramebuffer(36160, null);
};

flash.display3D.Context3D.prototype.setBlendFactors = function(sourceFactor, destinationFactor) {
	trace("Context3D::setBlendFactors NOT SETTING HARD CODED");
	this.webglContext.blendFunc(1, 771);
};

flash.display3D.Context3D.prototype.setCulling = function(triangleFaceToCull) {
};

flash.display3D.Context3D.prototype.setDepthTest = function(depthMask, passCompareMode) {
	if (!depthMask)
		this.webglContext.disable(2929);
};

flash.display3D.Context3D.prototype.setProgram = function(program) {
	trace("Context3D::setProgram: program: " + program);
	this.lastProgram = program;
};

flash.display3D.Context3D.prototype.setProgramConstantsFromMatrix = function(programType, firstRegister, matrix, transposedMatrix) {
	var projectionMatrix = new ArrayBuffer(16 * 4);
	var resultMatrix = new Float32Array(projectionMatrix);
	var data = matrix.rawData;
	var i = 0;
	if (!transposedMatrix) {
		for (i; i < 4; i++) {
			resultMatrix[(i * 4)] = data[i];
			resultMatrix[(i * 4) + 1] = data[i + 4];
			resultMatrix[(i * 4) + 2] = data[i + 8];
			resultMatrix[(i * 4) + 3] = data[i + 12];
		}
	} else {
		for (i; i < 16; i++) {
			resultMatrix[i] = data[i];
		}
	}
	this.webglContext.uniformMatrix4fv(this.lastProgram.mvMatrixUniform, false, resultMatrix);
};

flash.display3D.Context3D.prototype.setProgramConstantsFromVector = function(programType, firstRegister, data, numRegisters) {
};

flash.display3D.Context3D.prototype.setRenderToBackBuffer = function() {
};

flash.display3D.Context3D.prototype.setRenderToTexture = function(texture, enableDepthAndStencil, antiAlias, surfaceSelector) {
};

flash.display3D.Context3D.prototype.setScissorRectangle = function(rectangle) {
};

flash.display3D.Context3D.prototype.setTextureAt = function(sampler, texture) {
	if (!texture)
		return;
	this.webglContext.activeTexture(33984);
	this.webglContext.bindTexture(3553, texture._webglTexture);
};

flash.display3D.Context3D.prototype.setVertexBufferAt = function(index, buffer, bufferOffset, format) {
	if (!buffer)
		return;
	var size = (format == "float2") ? 2 : 4;
	try {
		index = this.lastProgram.registerOrdering[index];
	} catch (error) {
		trace("Context3D::setVertexBufferAt: [Program\'s register remapping failure] " + index);
	}
	if (this.lastVertexBuffer !== buffer) {
		buffer.uploadLast();
	}
	this.webglContext.vertexAttribPointer(index, size, 5126, false, buffer.elementsPerVertex * 4, bufferOffset * 4);
};

$inherit(flash.display3D.Context3D, flash.events.EventDispatcher);

flash.display3D.Context3D.className = "flash.display3D.Context3D";

flash.display3D.Context3D.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.display3D.IndexBuffer3D');
	p.push('flash.display3D.Program3D');
	p.push('flash.display3D.textures.TextureBase');
	p.push('trace');
	p.push('flash.display3D.textures.Texture');
	p.push('flash.display3D.VertexBuffer3D');
	return p;
};

flash.display3D.Context3D.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.Context3D.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 2:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 3:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.media.Sound
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.media == "undefined")
	flash.media = {};

flash.media.Sound = function(urlRequest, context) {
	this.url = null;
	this.node = null;
	this.soundChannel = null;
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.length = 0;
	this.xhr = null;
	this.isLoaded = false;
	flash.events.EventDispatcher.call(this);
	flash.media.SoundMixer.flash.media.SoundMixer.get_soundTransform();
	if (urlRequest)
		this.load(urlRequest, context);
};

flash.media.Sound.prototype.load = function(stream, context) {
	this.url = stream.url;
	if (flash.media.SoundMixer.cache[this.url]) {
		this.dispatchEvent(new flash.events.Event("complete", false, false));
		return;
	}
	if (flash.media.SoundMixer.usingWebAudio) {
		this.xhr = new XMLHttpRequest();
		this.xhr.open("GET", stream.url, true, "", "");
		this.xhr.responseType = "arraybuffer";
		this.xhr.onload = this.completeHandler;
		try {
			this.xhr.send();
		} catch (error) {
			this.xhr.onerror();
		}
	} else {
	}
};

flash.media.Sound.prototype.completeHandler = function() {
	var that = this;
	flash.media.SoundMixer.ctx.decodeAudioData(this.xhr.response, function(buffer) {
		if (buffer) {
			that.loadSound(buffer);
		}
	});
};

flash.media.Sound.prototype.loadSound = function(buffer) {
	console.log("url: " + this.url);
	flash.media.SoundMixer.cache[this.url] = buffer;
	this.length = buffer.duration;
	this.dispatchEvent(new flash.events.Event("complete", false, false));
	this.isLoaded = true;
};

flash.media.Sound.prototype.loadCompressedDataFromByteArray = function(bytes, length) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Sound.loadCompressedDataFromByteArray() $$$$");
};

flash.media.Sound.prototype.play = function(startTime, loops, sndTransform) {
	if (!this.soundChannel)
		this.soundChannel = new flash.media.SoundChannel();
	else
		this.soundChannel.stop();
	if (!flash.media.SoundMixer.cache[this.url])
		return this.soundChannel;
	if (flash.media.SoundMixer.usingWebAudio) {
		if (!this.node) {
			this.node = flash.media.SoundMixer.getGainNode();
			this.node.bufferSource.connect(this.node);
			this.node.connect(flash.media.SoundMixer.ctx.destination);
		}
		if (this.node.bufferSource && this.node.bufferSource.loop)
			this.node.bufferSource.stop(0);
		this.node.bufferSource = flash.media.SoundMixer.ctx.createBufferSource;
		this.node.bufferSource.loop = (loops > 0);
		this.node.bufferSource.buffer = flash.media.SoundMixer.cache[this.url];
		this.node.bufferSource.connect(flash.media.SoundMixer.ctx.destination);
		this.node.gain.value = 1;
		this.node.bufferSource.start(startTime);
		this.soundChannel.soundTransform.buffer = this.node.bufferSource;
	}
	return this.soundChannel;
};

flash.media.Sound.prototype.close = function() {
};

$inherit(flash.media.Sound, flash.events.EventDispatcher);

flash.media.Sound.className = "flash.media.Sound";

flash.media.Sound.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.media.SoundMixer');
	p.push('flash.utils.FlashTimingEngine');
	p.push('flash.events.Event');
	p.push('flash.media.SoundChannel');
	p.push('flash.net.URLRequest');
	return p;
};

flash.media.Sound.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.media.Sound.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'urlRequest', t:'flash.net.URLRequest'});
			p.push({n:'context', t:'flash.media.SoundLoaderContext'});
			break;
		case 1:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 2:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 3:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.net.SharedObject
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.net == "undefined")
	flash.net = {};

flash.net.SharedObject = function(target) {
	this.data = {};
	this.client = null;
	flash.events.EventDispatcher.call(this, target);
};

flash.net.SharedObject.prototype.flush = function(minDiskSpace) {
	return "flushed";
};

$inherit(flash.net.SharedObject, flash.events.EventDispatcher);

flash.net.SharedObject.className = "flash.net.SharedObject";

flash.net.SharedObject.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.net.SharedObject.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.net.SharedObject.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'target', t:'flash.events.IEventDispatcher'});
			break;
		case 1:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 2:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 3:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.net.URLLoader
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.net == "undefined")
	flash.net = {};

flash.net.URLLoader = function(request) {
	this.data = null;
	flash.events.EventDispatcher.call(this);
	if (request)
		this.load(request);
};

flash.net.URLLoader.prototype.load = function(request) {
	FlashAPILoggeer.log("URLLoader::load[" + request.method + "] - url: " + request.url);
	FlashAPILoggeer.log("URLLoader::load - vars: " + request.data);
	var event = new flash.events.Event("complete", false, false);
	event.target = this;
	var sent = false;
	if (request.url.indexOf("http:", 0) == -1) {
		try {
		} catch (error) {
			FlashAPILoggeer.log("URLLoader::cat error: " + error.message);
		}
		if (this.data.length > 50)
			FlashAPILoggeer.log("URLLoader::load - output: " + this.data.substr(0, 50));
		else
			FlashAPILoggeer.log("URLLoader::load - output: " + this.data);
		sent = (this.data != null);
	} else {
		var args = "";
		if (request.method == "get")
			args = "-G";
		try {
		} catch (error) {
			FlashAPILoggeer.log("URLLoader::curl error: " + error.message);
		}
		if (this.data.length > 50)
			FlashAPILoggeer.log("URLLoader::load - output: " + this.data.substr(0, 50));
		else
			FlashAPILoggeer.log("URLLoader::load - output: " + this.data);
		sent = (this.data != null);
	}
	if (sent)
		this.dispatchEvent(event);
};

flash.net.URLLoader.prototype.verifyAndLoadFile = function(file) {
	return true;
};

$inherit(flash.net.URLLoader, flash.events.EventDispatcher);

flash.net.URLLoader.className = "flash.net.URLLoader";

flash.net.URLLoader.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.events.Event');
	p.push('FlashAPILoggeer');
	return p;
};

flash.net.URLLoader.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.net.URLLoader.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'request', t:'flash.net.URLRequest'});
			break;
		case 1:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 2:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 3:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// FlashAPILoggeer
// ====================================================


FlashAPILoggeer = function() {
	
};

FlashAPILoggeer.logger;

FlashAPILoggeer.log = function(msg) {
	trace(FlashAPILoggeer.getTimestamp() + "[FAPI]" + msg + "");
	if (FlashAPILoggeer.logger)
		FlashAPILoggeer.logger(FlashAPILoggeer.getTimestamp() + "[FAPI]" + msg + "");
};

FlashAPILoggeer.getTimestamp = function() {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var millis = date.getMilliseconds();
	return "[" + hours < 10 ? "0" : "" + hours + ":" + minutes < 10 ? "0" : "" + minutes + ":" + seconds < 10 ? "0" : "" + seconds + "." + millis < 10 ? "00" : millis < 100 ? "0" : "" + millis + "] ";
};

FlashAPILoggeer.className = "FlashAPILoggeer";

FlashAPILoggeer.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('trace');
	return p;
};

FlashAPILoggeer.getStaticDependencies = function(t) {
	var p;
	return [];
};

FlashAPILoggeer.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.display.GraphicsPath
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.GraphicsPath = function(commands, data, winding) {
};

flash.display.GraphicsPath.className = "flash.display.GraphicsPath";

flash.display.GraphicsPath.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.GraphicsPath.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.GraphicsPath.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'commands', t:'Array'});
			p.push({n:'data', t:'Array'});
			p.push({n:'winding', t:'String'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.LineScaleMode
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.LineScaleMode = function() {
};

flash.display.LineScaleMode.NONE = "none";

flash.display.LineScaleMode.className = "flash.display.LineScaleMode";

flash.display.LineScaleMode.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.LineScaleMode.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.LineScaleMode.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.system.LoaderContext
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.system == "undefined")
	flash.system = {};

flash.system.LoaderContext = function(checkPolicyFile, applicationDomain, securityDomain) {
};

flash.system.LoaderContext.className = "flash.system.LoaderContext";

flash.system.LoaderContext.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.system.LoaderContext.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.system.LoaderContext.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'checkPolicyFile', t:'Boolean'});
			p.push({n:'applicationDomain', t:'Object'});
			p.push({n:'securityDomain', t:'Object'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display3D.IndexBuffer3D
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display3D == "undefined")
	flash.display3D = {};

flash.display3D.IndexBuffer3D = function() {
this.context3D = null;
this.buffer = null;
};

flash.display3D.IndexBuffer3D.prototype.uploadFromVector = function(data, startOffset, count) {
	trace("IndexBuffer3D.uploadFromVector: " + data.length);
	var indices = new renaun.html.stub.ArrayBuffer(data.length * 2);
	var shortArr = new Uint16Array(indices);
	for (var i = 0; i < data.length; i++) {
		shortArr[i] = data[i];
	}
	this.context3D.webglContext.bufferData(34963, indices, 35044);
};

flash.display3D.IndexBuffer3D.prototype.dispose = function() {
};

flash.display3D.IndexBuffer3D.className = "flash.display3D.IndexBuffer3D";

flash.display3D.IndexBuffer3D.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('trace');
	return p;
};

flash.display3D.IndexBuffer3D.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.IndexBuffer3D.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.geom.Matrix3D
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.geom == "undefined")
	flash.geom = {};

flash.geom.Matrix3D = function(v) {
	this.rawData = null;
	this.rawData = v;
};

flash.geom.Matrix3D.prototype.copyRawDataFrom = function(vector, index, transpose) {
	if (!this.rawData)
		this.rawData = [];
	for (var i = 0; i < vector.length; i++)
		this.rawData[i + index] = vector[i];
};

flash.geom.Matrix3D.className = "flash.geom.Matrix3D";

flash.geom.Matrix3D.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.geom.Matrix3D.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.geom.Matrix3D.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'v', t:'Array'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.StageDisplayState
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.StageDisplayState = function() {
};

flash.display.StageDisplayState.FULL_SCREEN = "fullScreen";

flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE = "fullScreenInteractive";

flash.display.StageDisplayState.NORMAL = "normal";

flash.display.StageDisplayState.className = "flash.display.StageDisplayState";

flash.display.StageDisplayState.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.StageDisplayState.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.StageDisplayState.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.geom.Orientation3D
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.geom == "undefined")
	flash.geom = {};

flash.geom.Orientation3D = function() {
};

flash.geom.Orientation3D.className = "flash.geom.Orientation3D";

flash.geom.Orientation3D.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.geom.Orientation3D.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.geom.Orientation3D.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.utils.ByteArray
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.ByteArray = function(length) {
	this.position = 0;
	this.shareable = false;
	this._length = 0;
	this._endian = "littleEndian";
	this.rawBytes = null;
	this._bytesAvailable = 0;
	this.rawBytes = new ArrayBuffer(0);
	this._bytesAvailable = 0;
};

flash.utils.ByteArray.RESIZE_FACTOR = 2;

flash.utils.ByteArray.prototype.get_bytesAvailable = function() {
	return this._bytesAvailable;
};

flash.utils.ByteArray.prototype.get_length = function() {
	return this._length;
};

flash.utils.ByteArray.prototype.set_length = function(value) {
	this._length = value;
};

flash.utils.ByteArray.prototype.resizeBuffer = function(newLength) {
	if (newLength == 0)
		newLength = 128;
	var newBuffer = new ArrayBuffer(newLength);
	if (this.rawBytes.byteLength != 0) {
		var rB8View = new Uint8Array(this.rawBytes);
		var nB8View = new Uint8Array(newBuffer);
		var len = this.get_length();
		for (var i = 0; i < len; i++)
			nB8View[i] = rB8View[i];
	}
	this.rawBytes = newBuffer;
};

flash.utils.ByteArray.prototype.compress = function(algorithm) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.compress() $$$$");
};

flash.utils.ByteArray.prototype.uncompress = function(algorithm) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.uncompress() $$$$");
};

flash.utils.ByteArray.prototype.readBytes = function(bytes, offset, length) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readBytes() $$$$");
};

flash.utils.ByteArray.prototype.readBoolean = function() {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readBoolean() $$$$");
	return false;
};

flash.utils.ByteArray.prototype.readByte = function() {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readByte() $$$$");
	return 0;
};

flash.utils.ByteArray.prototype.readUnsignedByte = function() {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readUnsignedByte() $$$$");
	return 0;
};

flash.utils.ByteArray.prototype.readShort = function() {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readShort() $$$$");
	return 0;
};

flash.utils.ByteArray.prototype.readUnsignedShort = function() {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readUnsignedShort() $$$$");
	return 0;
};

flash.utils.ByteArray.prototype.readInt = function() {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readInt() $$$$");
	return 0;
};

flash.utils.ByteArray.prototype.readUnsignedInt = function() {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readUnsignedInt() $$$$");
	return 0;
};

flash.utils.ByteArray.prototype.readFloat = function() {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readDouble() $$$$");
	return 0;
};

flash.utils.ByteArray.prototype.readDouble = function() {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readDouble() $$$$");
	return 0;
};

flash.utils.ByteArray.prototype.readMultiByte = function(length, charSet) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readMultiByte() $$$$");
	return null;
};

flash.utils.ByteArray.prototype.readUTF = function() {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readUTF() $$$$");
	return null;
};

flash.utils.ByteArray.prototype.readUTFBytes = function(length) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readUTFBytes() $$$$");
	return null;
};

flash.utils.ByteArray.prototype.readObject = function() {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readObject() $$$$");
	return null;
};

flash.utils.ByteArray.prototype.get_objectEncoding = function() {
	return 0;
};

flash.utils.ByteArray.prototype.set_objectEncoding = function(version) {
};

flash.utils.ByteArray.prototype.get_endian = function() {
	return this._endian;
};

flash.utils.ByteArray.prototype.set_endian = function(type) {
	this._endian = type;
};

flash.utils.ByteArray.prototype.writeBytes = function(bytes, offset, length) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.writeBytes() $$$$");
};

flash.utils.ByteArray.prototype.writeBoolean = function(value) {
	if (this.get_length() + 1 > this.rawBytes.byteLength)
		this.resizeBuffer(this.rawBytes.byteLength * 2);
	this.set_length(this.get_length() + 1);
	var d = new DataView(this.rawBytes);
	d.setInt8(this.position++, (value == 0) ? 0 : 1);
};

flash.utils.ByteArray.prototype.writeByte = function(value) {
	if (this.get_length() + 1 > this.rawBytes.byteLength)
		this.resizeBuffer(this.rawBytes.byteLength * 2);
	this.set_length(this.get_length() + 1);
	var d = new DataView(this.rawBytes);
	d.setInt8(this.position++, value);
};

flash.utils.ByteArray.prototype.writeShort = function(value) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.writeShort() $$$$");
};

flash.utils.ByteArray.prototype.writeInt = function(value) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.writeInt() $$$$");
};

flash.utils.ByteArray.prototype.writeUnsignedInt = function(value) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.writeUnsignedInt() $$$$");
};

flash.utils.ByteArray.prototype.writeFloat = function(value) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.writeFloat() $$$$");
};

flash.utils.ByteArray.prototype.writeDouble = function(value) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.writeDouble() $$$$");
};

flash.utils.ByteArray.prototype.writeMultiByte = function(value, charSet) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.writeMultiByte() $$$$");
};

flash.utils.ByteArray.prototype.writeUTF = function(value) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.writeUTF() $$$$");
};

flash.utils.ByteArray.prototype.writeUTFBytes = function(value) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.writeUTFBytes() $$$$");
};

flash.utils.ByteArray.prototype.writeObject = function(object) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.writeObject() $$$$");
};

flash.utils.ByteArray.className = "flash.utils.ByteArray";

flash.utils.ByteArray.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.utils.FlashTimingEngine');
	return p;
};

flash.utils.ByteArray.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.ByteArray.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'length', t:'int'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// mx.core.ByteArrayAsset
// ====================================================

if (typeof mx == "undefined")
	var mx = {};
if (typeof mx.core == "undefined")
	mx.core = {};

mx.core.ByteArrayAsset = function() {
flash.utils.ByteArray.call(this);
};

$inherit(mx.core.ByteArrayAsset, flash.utils.ByteArray);

mx.core.ByteArrayAsset.className = "mx.core.ByteArrayAsset";

mx.core.ByteArrayAsset.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

mx.core.ByteArrayAsset.getStaticDependencies = function(t) {
	var p;
	return [];
};

mx.core.ByteArrayAsset.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.utils.ByteArray.injectionPoints(t);
			break;
		case 2:
			p = flash.utils.ByteArray.injectionPoints(t);
			break;
		case 3:
			p = flash.utils.ByteArray.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.net.URLLoaderDataFormat
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.net == "undefined")
	flash.net = {};

flash.net.URLLoaderDataFormat = function() {
};

flash.net.URLLoaderDataFormat.TEXT = "text";

flash.net.URLLoaderDataFormat.BINARY = "binary";

flash.net.URLLoaderDataFormat.className = "flash.net.URLLoaderDataFormat";

flash.net.URLLoaderDataFormat.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.net.URLLoaderDataFormat.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.net.URLLoaderDataFormat.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.display.StageScaleMode
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.StageScaleMode = function() {
};

flash.display.StageScaleMode.NO_SCALE = "noScale";

flash.display.StageScaleMode.SHOW_ALL = "showAll";

flash.display.StageScaleMode.className = "flash.display.StageScaleMode";

flash.display.StageScaleMode.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.StageScaleMode.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.StageScaleMode.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.display3D.Program3D
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display3D == "undefined")
	flash.display3D = {};

flash.display3D.Program3D = function() {
this.textureCoordAttribute = null;
this.colorAttribute = null;
this.mvMatrixUniform = null;
this.registerOrdering = [];
this.vertexPositionAttribute = null;
this.context3D = null;
this.shaderVertex = null;
this.shaderProgram = null;
this.samplerUniform = null;
this.shaderFragment = null;
};

flash.display3D.Program3D.prototype.dispose = function() {
	this.context3D.webglContext.deleteShader(this.shaderVertex);
	this.context3D.webglContext.deleteShader(this.shaderFragment);
	this.context3D.webglContext.deleteProgram(this.shaderProgram);
};

flash.display3D.Program3D.prototype.upload = function(vertexProgram, fragmentProgram) {
	this.registerOrdering = [];
	var shaderFragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform sampler2D uSampler;", "void main(void) {", "gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y));", "gl_FragColor = gl_FragColor * vColor;", "}"];
	var shaderVertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute float aColor;", "uniform mat4 uMVMatrix;", "varying vec2 vTextureCoord;", "varying float vColor;", "void main(void) {", "gl_Position = uMVMatrix * vec4(aVertexPosition, 1.0, 1.0);", "vTextureCoord = aTextureCoord;", "vColor = aColor;", "}"];
	this.shaderProgram = this.context3D.webglContext.createProgram();
	var shaderVertex = this.compileShader(shaderVertexSrc, 35633);
	this.context3D.webglContext.attachShader(this.shaderProgram, shaderVertex);
	var shaderFragment = this.compileShader(shaderFragmentSrc, 35632);
	this.context3D.webglContext.attachShader(this.shaderProgram, shaderFragment);
	this.context3D.webglContext.linkProgram(this.shaderProgram);
	if (!this.context3D.webglContext.getProgramParameter(this.shaderProgram, 35714)) {
		throw new Error("Could not initialize shaders", 0);
	}
	this.context3D.webglContext.useProgram(this.shaderProgram);
	this.vertexPositionAttribute = this.context3D.webglContext.getAttribLocation(this.shaderProgram, "aVertexPosition");
	this.context3D.webglContext.enableVertexAttribArray(this.vertexPositionAttribute);
	this.registerOrdering.push(this.vertexPositionAttribute);
	this.colorAttribute = this.context3D.webglContext.getAttribLocation(this.shaderProgram, "aColor");
	this.context3D.webglContext.enableVertexAttribArray(this.colorAttribute);
	this.registerOrdering.push(this.colorAttribute);
	this.textureCoordAttribute = this.context3D.webglContext.getAttribLocation(this.shaderProgram, "aTextureCoord");
	this.context3D.webglContext.enableVertexAttribArray(this.textureCoordAttribute);
	this.registerOrdering.push(this.textureCoordAttribute);
	this.mvMatrixUniform = this.context3D.webglContext.getUniformLocation(this.shaderProgram, "uMVMatrix");
	this.samplerUniform = this.context3D.webglContext.getUniformLocation(this.shaderProgram, "uSampler");
};

flash.display3D.Program3D.prototype.compileShader = function(shaderSrc, shaderType) {
	var src = shaderSrc.join("\n");
	var shader = this.context3D.webglContext.createShader(shaderType);
	this.context3D.webglContext.shaderSource(shader, src);
	this.context3D.webglContext.compileShader(shader);
	if (!this.context3D.webglContext.getShaderParameter(shader, 35713)) {
		trace(this.context3D.webglContext.getShaderInfoLog(shader));
		return null;
	}
	return shader;
};

flash.display3D.Program3D.className = "flash.display3D.Program3D";

flash.display3D.Program3D.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('trace');
	return p;
};

flash.display3D.Program3D.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.Program3D.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.text.AntiAliasType
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.text == "undefined")
	flash.text = {};

flash.text.AntiAliasType = function() {
	
};

flash.text.AntiAliasType.ADVANCED = "advanced";

flash.text.AntiAliasType.NORMAL = "normal";

flash.text.AntiAliasType.className = "flash.text.AntiAliasType";

flash.text.AntiAliasType.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.text.AntiAliasType.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.text.AntiAliasType.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.system.ImageDecodingPolicy
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.system == "undefined")
	flash.system = {};

flash.system.ImageDecodingPolicy = function() {
};

flash.system.ImageDecodingPolicy.ON_LOAD = "onLoad";

flash.system.ImageDecodingPolicy.className = "flash.system.ImageDecodingPolicy";

flash.system.ImageDecodingPolicy.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.system.ImageDecodingPolicy.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.system.ImageDecodingPolicy.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.xml.XMLNode
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.xml == "undefined")
	flash.xml = {};

flash.xml.XMLNode = function(type, value) {
};

flash.xml.XMLNode.className = "flash.xml.XMLNode";

flash.xml.XMLNode.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.xml.XMLNode.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.xml.XMLNode.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'uint'});
			p.push({n:'value', t:'String'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.xml.XMLDocument
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.xml == "undefined")
	flash.xml = {};

flash.xml.XMLDocument = function(source) {
	flash.xml.XMLNode.call(this, 1, source);
};

$inherit(flash.xml.XMLDocument, flash.xml.XMLNode);

flash.xml.XMLDocument.className = "flash.xml.XMLDocument";

flash.xml.XMLDocument.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.xml.XMLDocument.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.xml.XMLDocument.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'source', t:'String'});
			break;
		case 1:
			p = flash.xml.XMLNode.injectionPoints(t);
			break;
		case 2:
			p = flash.xml.XMLNode.injectionPoints(t);
			break;
		case 3:
			p = flash.xml.XMLNode.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.SpreadMethod
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.SpreadMethod = function() {
};

flash.display.SpreadMethod.PAD = "pad";

flash.display.SpreadMethod.REFLECT = "reflect";

flash.display.SpreadMethod.REPEAT = "repeat";

flash.display.SpreadMethod.className = "flash.display.SpreadMethod";

flash.display.SpreadMethod.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.SpreadMethod.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.SpreadMethod.injectionPoints = function(t) {
	return [];
};

// ====================================================
// GuiceInjectorBootstrap
// ====================================================


GuiceInjectorBootstrap = function(mainClassName, dynamicClassBaseUrl) {
	this.mainClassName = mainClassName;
	this.dynamicClassBaseUrl = dynamicClassBaseUrl;
};

GuiceInjectorBootstrap.prototype.launch = function(bgcolor, width, height, frameRate) {
	var urlRewriter = new guice.loader.URLRewriterBase(false);
	var loader = new guice.loader.SynchronousClassLoader(new XMLHttpRequest(), urlRewriter, this.dynamicClassBaseUrl);
	var guiceJs = new guice.GuiceJs(loader);
	var injector = guiceJs.createInjector(null);
	var classBuilder = injector.getInstance(guice.InjectionClassBuilder);
	var obj = classBuilder.buildClass(this.mainClassName);
	if (bgcolor.indexOf("#", 0) > -1)
		bgcolor = "0x" + bgcolor.substring(1, bgcolor.length);
	flash.utils.FlashTimingEngine.start(obj, frameRate, width, height, bgcolor);
};

GuiceInjectorBootstrap.className = "GuiceInjectorBootstrap";

GuiceInjectorBootstrap.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('guice.InjectionClassBuilder');
	p.push('guice.loader.SynchronousClassLoader');
	p.push('flash.utils.FlashTimingEngine');
	p.push('guice.loader.URLRewriterBase');
	p.push('guice.GuiceJs');
	return p;
};

GuiceInjectorBootstrap.getStaticDependencies = function(t) {
	var p;
	return [];
};

GuiceInjectorBootstrap.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'mainClassName', t:'String'});
			p.push({n:'dynamicClassBaseUrl', t:'String'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display3D.Context3DCompareMode
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display3D == "undefined")
	flash.display3D = {};

flash.display3D.Context3DCompareMode = function() {
};

flash.display3D.Context3DCompareMode.ALWAYS = "always";

flash.display3D.Context3DCompareMode.EQUAL = "equal";

flash.display3D.Context3DCompareMode.GREATER = "greater";

flash.display3D.Context3DCompareMode.GREATER_EQUAL = "greaterEqual";

flash.display3D.Context3DCompareMode.LESS = "less";

flash.display3D.Context3DCompareMode.LESS_EQUAL = "lessEqual";

flash.display3D.Context3DCompareMode.NEVER = "never";

flash.display3D.Context3DCompareMode.NOT_EQUAL = "notEqual";

flash.display3D.Context3DCompareMode.className = "flash.display3D.Context3DCompareMode";

flash.display3D.Context3DCompareMode.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.Context3DCompareMode.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.Context3DCompareMode.injectionPoints = function(t) {
	return [];
};

// ====================================================
// mx.core.MovieClipAsset
// ====================================================

if (typeof mx == "undefined")
	var mx = {};
if (typeof mx.core == "undefined")
	mx.core = {};

mx.core.MovieClipAsset = function() {
};

mx.core.MovieClipAsset.className = "mx.core.MovieClipAsset";

mx.core.MovieClipAsset.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

mx.core.MovieClipAsset.getStaticDependencies = function(t) {
	var p;
	return [];
};

mx.core.MovieClipAsset.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.events.Event
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.Event = function(type, bubbles, cancelable) {
	this._type = "";
	this._cancelable = null;
	this._bubbles = null;
	this.target = null;
	this._type = type;
	this._bubbles = bubbles;
	this._cancelable = cancelable;
};

flash.events.Event.ACTIVATE = "activate";

flash.events.Event.ADDED_TO_STAGE = "addedToStage";

flash.events.Event.CLOSE = "close";

flash.events.Event.OPEN = "open";

flash.events.Event.COMPLETE = "complete";

flash.events.Event.CONNECT = "connect";

flash.events.Event.CHANGE = "change";

flash.events.Event.ADDED = "added";

flash.events.Event.ENTER_FRAME = "enterFrame";

flash.events.Event.FULLSCREEN = "fullScreen";

flash.events.Event.REMOVED_FROM_STAGE = "removedFromStage";

flash.events.Event.REMOVED = "removed";

flash.events.Event.RENDER = "render";

flash.events.Event.RESIZE = "resize";

flash.events.Event.MOUSE_LEAVE = "mouseLeave";

flash.events.Event.SOUND_COMPLETE = "soundComplete";

flash.events.Event.CONTEXT3D_CREATE = "context3DCreate";

flash.events.Event.prototype.get_type = function() {
	return this._type;
};

flash.events.Event.prototype.get_bubbles = function() {
	return this._bubbles;
};

flash.events.Event.prototype.get_cancelable = function() {
	return this._cancelable;
};

flash.events.Event.prototype.clone = function() {
	return new flash.events.Event(this.get_type(), false, false);
};

flash.events.Event.prototype.preventDefault = function() {
};

flash.events.Event.prototype.toString = function() {
	return "";
};

flash.events.Event.className = "flash.events.Event";

flash.events.Event.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.Event.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.Event.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.events.ActivityEvent
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.ActivityEvent = function(type, bubbles, cancelable, activating) {
	flash.events.Event.call(this, type, bubbles, cancelable);
};

$inherit(flash.events.ActivityEvent, flash.events.Event);

flash.events.ActivityEvent.className = "flash.events.ActivityEvent";

flash.events.ActivityEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.ActivityEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.ActivityEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			p.push({n:'activating', t:'Boolean'});
			break;
		case 1:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 2:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 3:
			p = flash.events.Event.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.events.FullScreenEvent
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.FullScreenEvent = function(type, bubbles, cancelable, fullScreen) {
	flash.events.ActivityEvent.call(this, type, bubbles, cancelable, false);
};

flash.events.FullScreenEvent.FULL_SCREEN = "fullScreen";

$inherit(flash.events.FullScreenEvent, flash.events.ActivityEvent);

flash.events.FullScreenEvent.className = "flash.events.FullScreenEvent";

flash.events.FullScreenEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.FullScreenEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.FullScreenEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			p.push({n:'fullScreen', t:'Boolean'});
			break;
		case 1:
			p = flash.events.ActivityEvent.injectionPoints(t);
			break;
		case 2:
			p = flash.events.ActivityEvent.injectionPoints(t);
			break;
		case 3:
			p = flash.events.ActivityEvent.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.events.ErrorEvent
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.ErrorEvent = function(type, bubbles, cancelable, text, id) {
	this._errorID = 0;
	flash.events.Event.call(this, type, bubbles, cancelable);
	this.text = text;
	this._errorID = id;
};

flash.events.ErrorEvent.ERROR = "error";

flash.events.ErrorEvent.prototype.get_errorID = function() {
	return this._errorID;
};

$inherit(flash.events.ErrorEvent, flash.events.Event);

flash.events.ErrorEvent.className = "flash.events.ErrorEvent";

flash.events.ErrorEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.ErrorEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.ErrorEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			p.push({n:'text', t:'String'});
			p.push({n:'id', t:'int'});
			break;
		case 1:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 2:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 3:
			p = flash.events.Event.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.events.AsyncErrorEvent
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.AsyncErrorEvent = function(type, bubbles, cancelable, text, id) {
	flash.events.ErrorEvent.call(this, type, bubbles, cancelable, text, id);
};

flash.events.AsyncErrorEvent.ASYNC_ERROR = "asyncError";

$inherit(flash.events.AsyncErrorEvent, flash.events.ErrorEvent);

flash.events.AsyncErrorEvent.className = "flash.events.AsyncErrorEvent";

flash.events.AsyncErrorEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.AsyncErrorEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.AsyncErrorEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			p.push({n:'text', t:'String'});
			p.push({n:'id', t:'int'});
			break;
		case 1:
			p = flash.events.ErrorEvent.injectionPoints(t);
			break;
		case 2:
			p = flash.events.ErrorEvent.injectionPoints(t);
			break;
		case 3:
			p = flash.events.ErrorEvent.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.events.SecurityErrorEvent
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.SecurityErrorEvent = function(type, bubbles, cancelable, text, id) {
	flash.events.ErrorEvent.call(this, type, bubbles, cancelable, text, id);
};

flash.events.SecurityErrorEvent.SECURITY_ERROR = "securityError";

$inherit(flash.events.SecurityErrorEvent, flash.events.ErrorEvent);

flash.events.SecurityErrorEvent.className = "flash.events.SecurityErrorEvent";

flash.events.SecurityErrorEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.SecurityErrorEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.SecurityErrorEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			p.push({n:'text', t:'String'});
			p.push({n:'id', t:'int'});
			break;
		case 1:
			p = flash.events.ErrorEvent.injectionPoints(t);
			break;
		case 2:
			p = flash.events.ErrorEvent.injectionPoints(t);
			break;
		case 3:
			p = flash.events.ErrorEvent.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.events.ProgressEvent
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.ProgressEvent = function(type, bubbles, cancelable, bytesLoaded, bytesTotal) {
	flash.events.Event.call(this, type, bubbles, cancelable);
	this.bytesLoaded = bytesLoaded;
	this.bytesTotal = bytesTotal;
};

flash.events.ProgressEvent.PROGRESS = "progress";

flash.events.ProgressEvent.SOCKET_DATA = "socketData";

$inherit(flash.events.ProgressEvent, flash.events.Event);

flash.events.ProgressEvent.className = "flash.events.ProgressEvent";

flash.events.ProgressEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.ProgressEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.ProgressEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			p.push({n:'bytesLoaded', t:'Number'});
			p.push({n:'bytesTotal', t:'Number'});
			break;
		case 1:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 2:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 3:
			p = flash.events.Event.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.events.TextEvent
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.TextEvent = function(type, bubbles, cancelable, text) {
	flash.events.Event.call(this, type, bubbles, cancelable);
	this.text = text;
};

flash.events.TextEvent.LINK = "link";

flash.events.TextEvent.TEXT_INPUT = "textInput";

$inherit(flash.events.TextEvent, flash.events.Event);

flash.events.TextEvent.className = "flash.events.TextEvent";

flash.events.TextEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.TextEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.TextEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			p.push({n:'text', t:'String'});
			break;
		case 1:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 2:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 3:
			p = flash.events.Event.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.events.KeyboardEvent
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.KeyboardEvent = function(type, bubbles, cancelable, charCodeValue, keyCodeValue, keyLocationValue, ctrlKeyValue, altKeyValue, shiftKeyValue, controlKeyValue, commandKeyValue) {
	this.keyCode = 0;
	flash.events.Event.call(this, type, bubbles, cancelable);
	this.keyCode = keyCodeValue;
};

flash.events.KeyboardEvent.KEY_UP = "keyUp";

flash.events.KeyboardEvent.KEY_DOWN = "keyDown";

$inherit(flash.events.KeyboardEvent, flash.events.Event);

flash.events.KeyboardEvent.className = "flash.events.KeyboardEvent";

flash.events.KeyboardEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.KeyboardEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.KeyboardEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			p.push({n:'charCodeValue', t:'uint'});
			p.push({n:'keyCodeValue', t:'uint'});
			p.push({n:'keyLocationValue', t:'uint'});
			p.push({n:'ctrlKeyValue', t:'Boolean'});
			p.push({n:'altKeyValue', t:'Boolean'});
			p.push({n:'shiftKeyValue', t:'Boolean'});
			p.push({n:'controlKeyValue', t:'Boolean'});
			p.push({n:'commandKeyValue', t:'Boolean'});
			break;
		case 1:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 2:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 3:
			p = flash.events.Event.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.events.IOErrorEvent
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.IOErrorEvent = function(type, bubbles, cancelable, text, id) {
	this._errorID = 0;
	flash.events.Event.call(this, type, bubbles, cancelable);
	this.text = text;
	this._errorID = id;
};

flash.events.IOErrorEvent.IO_ERROR = "ioError";

flash.events.IOErrorEvent.NETWORK_ERROR = "networkError";

flash.events.IOErrorEvent.prototype.get_errorID = function() {
	return this._errorID;
};

$inherit(flash.events.IOErrorEvent, flash.events.Event);

flash.events.IOErrorEvent.className = "flash.events.IOErrorEvent";

flash.events.IOErrorEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.IOErrorEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.IOErrorEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			p.push({n:'text', t:'String'});
			p.push({n:'id', t:'int'});
			break;
		case 1:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 2:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 3:
			p = flash.events.Event.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.events.TimerEvent
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.TimerEvent = function(type, bubbles, cancelable) {
	flash.events.Event.call(this, type, bubbles, cancelable);
};

flash.events.TimerEvent.TIMER = "timer";

flash.events.TimerEvent.TIMER_COMPLETE = "timerComplete";

$inherit(flash.events.TimerEvent, flash.events.Event);

flash.events.TimerEvent.className = "flash.events.TimerEvent";

flash.events.TimerEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.TimerEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.TimerEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			break;
		case 1:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 2:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 3:
			p = flash.events.Event.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.events.TouchEvent
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.TouchEvent = function(type, bubbles, cancelable, touchPointID, isPrimaryTouchPoint, localX, localY, sizeX, sizeY, pressure, relatedObject, ctrlKey, altKey, shiftKey, commandKey, controlKey, timestamp, touchIntent, samples, isTouchPointCanceled) {
	this.stageY = 0;
	this.stageX = 0;
	flash.events.Event.call(this, type, bubbles, cancelable);
	this.pressure = pressure;
	this.sizeX = sizeX;
	this.sizeY = sizeY;
	this.touchPointID = touchPointID;
};

flash.events.TouchEvent.TOUCH_BEGIN = "touchBegin";

flash.events.TouchEvent.TOUCH_END = "touchEnd";

flash.events.TouchEvent.TOUCH_MOVE = "touchMove";

$inherit(flash.events.TouchEvent, flash.events.Event);

flash.events.TouchEvent.className = "flash.events.TouchEvent";

flash.events.TouchEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.TouchEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.TouchEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			p.push({n:'touchPointID', t:'int'});
			p.push({n:'isPrimaryTouchPoint', t:'Boolean'});
			p.push({n:'localX', t:'Number'});
			p.push({n:'localY', t:'Number'});
			p.push({n:'sizeX', t:'Number'});
			p.push({n:'sizeY', t:'Number'});
			p.push({n:'pressure', t:'Number'});
			p.push({n:'relatedObject', t:'flash.display.InteractiveObject'});
			p.push({n:'ctrlKey', t:'Boolean'});
			p.push({n:'altKey', t:'Boolean'});
			p.push({n:'shiftKey', t:'Boolean'});
			p.push({n:'commandKey', t:'Boolean'});
			p.push({n:'controlKey', t:'Boolean'});
			p.push({n:'timestamp', t:'Number'});
			p.push({n:'touchIntent', t:'String'});
			p.push({n:'samples', t:'flash.utils.ByteArray'});
			p.push({n:'isTouchPointCanceled', t:'Boolean'});
			break;
		case 1:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 2:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 3:
			p = flash.events.Event.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.events.MouseEvent
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.MouseEvent = function(type, bubbles, cancelable, localX, localY, relatedObject, ctrlKey, altKey, shiftKey, buttonDown, delta, commandKey, controlKey, clickCount) {
	flash.events.Event.call(this, type, bubbles, cancelable);
	this.localX = localX;
	this.localY = localY;
};

flash.events.MouseEvent.CLICK = "click";

flash.events.MouseEvent.MOUSE_DOWN = "mouseDown";

flash.events.MouseEvent.MOUSE_MOVE = "mouseMove";

flash.events.MouseEvent.MOUSE_UP = "mouseUp";

flash.events.MouseEvent.MOUSE_OVER = "mouseOver";

flash.events.MouseEvent.MOUSE_OUT = "mouseOut";

flash.events.MouseEvent.ROLL_OVER = "rollOver";

flash.events.MouseEvent.ROLL_OUT = "rollOut";

flash.events.MouseEvent.MOUSE_WHEEL = "mouseWheel";

flash.events.MouseEvent.prototype.get_stageX = function() {
	return this.localX;
};

flash.events.MouseEvent.prototype.get_stageY = function() {
	return this.localY;
};

$inherit(flash.events.MouseEvent, flash.events.Event);

flash.events.MouseEvent.className = "flash.events.MouseEvent";

flash.events.MouseEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.MouseEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.MouseEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			p.push({n:'localX', t:'Number'});
			p.push({n:'localY', t:'Number'});
			p.push({n:'relatedObject', t:'flash.display.InteractiveObject'});
			p.push({n:'ctrlKey', t:'Boolean'});
			p.push({n:'altKey', t:'Boolean'});
			p.push({n:'shiftKey', t:'Boolean'});
			p.push({n:'buttonDown', t:'Boolean'});
			p.push({n:'delta', t:'int'});
			p.push({n:'commandKey', t:'Boolean'});
			p.push({n:'controlKey', t:'Boolean'});
			p.push({n:'clickCount', t:'int'});
			break;
		case 1:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 2:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 3:
			p = flash.events.Event.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.events.FocusEvent
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.FocusEvent = function(type, bubbles, cancelable) {
	flash.events.Event.call(this, type, bubbles, cancelable);
};

flash.events.FocusEvent.FOCUS_IN = "focusIn";

flash.events.FocusEvent.FOCUS_OUT = "focusOut";

$inherit(flash.events.FocusEvent, flash.events.Event);

flash.events.FocusEvent.className = "flash.events.FocusEvent";

flash.events.FocusEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.FocusEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.FocusEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			break;
		case 1:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 2:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 3:
			p = flash.events.Event.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.events.ContextMenuEvent
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.ContextMenuEvent = function(type, bubbles, cancelable) {
	flash.events.Event.call(this, type, bubbles, cancelable);
};

flash.events.ContextMenuEvent.MENU_ITEM_SELECT = "menuItemSelect";

$inherit(flash.events.ContextMenuEvent, flash.events.Event);

flash.events.ContextMenuEvent.className = "flash.events.ContextMenuEvent";

flash.events.ContextMenuEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.ContextMenuEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.ContextMenuEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			break;
		case 1:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 2:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 3:
			p = flash.events.Event.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.events.NetStatusEvent
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.NetStatusEvent = function(type, bubbles, cancelable) {
	this.info = {};
	flash.events.Event.call(this, type, bubbles, cancelable);
};

flash.events.NetStatusEvent.NET_STATUS = "netStatus";

$inherit(flash.events.NetStatusEvent, flash.events.Event);

flash.events.NetStatusEvent.className = "flash.events.NetStatusEvent";

flash.events.NetStatusEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.NetStatusEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.NetStatusEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			break;
		case 1:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 2:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 3:
			p = flash.events.Event.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.BitmapData
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.BitmapData = function(width, height, transparent, fillColor) {
	this._rect = null;
	this.imageData = null;
	this.image = null;
	this.bitmapBytes = null;
	this.checkTable = null;
	this.isLoaded = false;
	this.width = width;
	this.height = height;
	this.transparent = transparent;
	this.fillColor = fillColor;
	var len = width * height;
	if (len > 0) {
		var canvas = document.createElement("canvas");
		canvas.width = width;
		canvas.height = height;
		var ctx = canvas.getContext("2d");
		this.imageData = ctx.createImageData(width, height);
		if (transparent && fillColor == 0)
			len = 0;
		for (var i = 0; i < len; i++) {
			var index = i * 4;
			this.imageData.data[index + 0] = fillColor >> 16 & 0xFF;
			this.imageData.data[index + 1] = fillColor >> 8 & 0xFF;
			this.imageData.data[index + 2] = fillColor >> 0 & 0xFF;
			this.imageData.data[index + 3] = transparent ? (fillColor >> 24 & 0xFF) : 0xFF;
		}
		ctx.putImageData(this.imageData, 0, 0);
		this.image = canvas;
	}
	this._rect = new flash.geom.Rectangle(0, 0, width, height);
};

flash.display.BitmapData.prototype.embedImage = function(source) {
	this.image = new Image();
	var request = new XMLHttpRequest();
	request.open("get", source, false, "", "");
	request.overrideMimeType("text\/plain; charset=x-user-defined");
	request.send();
	var byteMe = "";
	var len = request.responseText.length;
	for (var i = 0; i <= len - 1; i++)
		byteMe += String.fromCharCode(request.responseText.charCodeAt(i) & 0xff);
	this.image.onerror = function() {
		trace("ImageError");
	};
	var that = this;
	this.image.onload = function() {
		trace("ONLOAD Here: " + this.width + " - " + this.height + " - " + this.complete + " - " + that.image.width);
		that.width = that.image.width;
		that.height = that.image.height;
		that.isLoaded = true;
	};
	this.image.src = "data:image\/png;base64," + window.btoa(byteMe);
	trace("ImageLoaded Here: " + this.image.width + " - " + this.image.height + " source:" + source + " - " + this.image.complete);
	if (this.image.complete) {
		this.width = this.image.width;
		this.height = this.image.height;
	} else {
		this.isLoaded = false;
		flash.utils.FlashTimingEngine.embedLoadingObjects.push(this);
	}
};

flash.display.BitmapData.prototype.get_rect = function() {
	return this._rect;
};

flash.display.BitmapData.prototype.lock = function() {
};

flash.display.BitmapData.prototype.unlock = function() {
};

flash.display.BitmapData.prototype.colorTransform = function(rect, colorTransform) {
};

flash.display.BitmapData.prototype.copyPixels = function(sourceBitmapData, sourceRect, destPoint, alphaBitmapData, alphaPoint, mergeAlpha) {
	if (sourceBitmapData.image) {
		var canvas = document.createElement("canvas");
		canvas.width = this.width;
		canvas.height = this.height;
		var ctx = canvas.getContext("2d");
		ctx.drawImage(sourceBitmapData.image, 0, 0, sourceBitmapData.image.width, sourceBitmapData.image.height, 0, 0, sourceBitmapData.image.width, sourceBitmapData.image.height);
		this.image = canvas;
	} else {
		flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: NON IMAGE BitmapData.copyPixels() $$$$");
	}
};

flash.display.BitmapData.prototype.getPixel = function(x, y) {
	this.bitmapBytes.position = (x + (y * this.width)) * 4;
	return this.bitmapBytes.readUnsignedInt();
};

flash.display.BitmapData.prototype.getPixel32 = function(x, y) {
	this.bitmapBytes.position = (x + (y * this.width)) * 4;
	return this.bitmapBytes.readUnsignedInt();
};

flash.display.BitmapData.prototype.getPixels = function(rect) {
	return new flash.utils.ByteArray(128);
};

flash.display.BitmapData.prototype.setPixel = function(x, y, color) {
	this.bitmapBytes.position = (x + (y * this.width)) * 4;
	this.bitmapBytes.writeUnsignedInt(color);
};

flash.display.BitmapData.prototype.setPixel32 = function(x, y, color) {
	this.bitmapBytes.position = (x + (y * this.width)) * 4;
	this.bitmapBytes.writeUnsignedInt(color);
};

flash.display.BitmapData.prototype.setPixels = function(rect, inputByteArray) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: BitmapData.setPixels() $$$$");
};

flash.display.BitmapData.prototype.getColorBoundsRect = function(color1, color2) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: BitmapData.getColorBoundsRect() $$$$");
	return new flash.geom.Rectangle(0, 0, 10, 10);
};

flash.display.BitmapData.prototype.applyFilter = function(sourceBitmapData, sourceRect, destPoint, filter) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: BitmapData.applyFilter() $$$$");
};

flash.display.BitmapData.prototype.noise = function(randomSeed, low, high, channelOptions, grayScale) {
	for (var i = 0; i < this.bitmapBytes.get_length(); i += 4) {
		this.bitmapBytes.position = i;
		this.bitmapBytes.writeUnsignedInt(Math.random() * 0xffffffff);
	}
};

flash.display.BitmapData.prototype.scroll = function(x, y) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: BitmapData.scroll() $$$$");
};

flash.display.BitmapData.prototype.fillRect = function(rect, color) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: BitmapData.fillRect() $$$$");
};

flash.display.BitmapData.prototype.floodFill = function(x, y, color) {
	var pos = (x + (y * this.width));
	var pixelColor = this.getPixel(x, y);
	this.setPixel(x, y, color);
	this.checkTable = new flash.utils.Dictionary(false);
	this.checkTable[pos] = true;
	this.recFloodFill(x, y, color, pixelColor);
};

flash.display.BitmapData.prototype.recFloodFill = function(x, y, fillColor, checkColor) {
	var pos = (x + (y * this.width));
	if (pos < 0 || pos > (this.width * this.height) || this.checkTable[pos] == true || this.getPixel(x, y) != checkColor)
		return;
	if (!this.checkTable[pos]) {
		this.setPixel(x, y, fillColor);
		this.checkTable[pos] = true;
	}
	this.recFloodFill(x - 1, y - 1, fillColor, checkColor);
	this.recFloodFill(x + 0, y - 1, fillColor, checkColor);
	this.recFloodFill(x + 1, y - 1, fillColor, checkColor);
	this.recFloodFill(x - 1, y + 0, fillColor, checkColor);
	this.recFloodFill(x + 1, y + 0, fillColor, checkColor);
	this.recFloodFill(x - 1, y + 1, fillColor, checkColor);
	this.recFloodFill(x + 0, y + 1, fillColor, checkColor);
	this.recFloodFill(x + 1, y + 1, fillColor, checkColor);
};

flash.display.BitmapData.prototype.dispose = function() {
	if (this.image) {
		this.imageData = null;
		this.image = null;
	} else {
		flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: BitmapData.dispose() $$$$");
	}
};

flash.display.BitmapData.prototype.draw = function(source, matrix, colorTransform, blendMode, clipRect, smoothing) {
	var sourceBitmapData = source;
	if (!sourceBitmapData || !this.image)
		return;
	if (!sourceBitmapData.image)
		return;
	var ctx = this.image.getContext("2d");
	ctx.drawImage(sourceBitmapData.image, 0, 0, sourceBitmapData.image.width * matrix.a, sourceBitmapData.image.height * matrix.d);
};

flash.display.BitmapData.prototype.paletteMap = function(sourceBitmapData, sourceRect, destPoint, redArray, greenArray, blueArray, alphaArray) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: BitmapData.paletteMap() $$$$");
};

flash.display.BitmapData.prototype.perlinNoise = function(baseX, baseY, numOctaves, randomSeed, stitch, fractalNoise, channelOptions, grayScale, offsets) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: BitmapData.perlinNoise() $$$$");
};

flash.display.BitmapData.prototype.threshold = function(sourceBitmapData, sourceRect, destPoint, operation, threshold, color, mask, copySource) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: BitmapData.threshold() $$$$");
	return 0;
};

flash.display.BitmapData.prototype.clone = function() {
	return new flash.display.BitmapData(this.width, this.height, true, 0);
};

flash.display.BitmapData.className = "flash.display.BitmapData";

flash.display.BitmapData.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('trace');
	p.push('flash.geom.Rectangle');
	p.push('flash.utils.Dictionary');
	p.push('flash.utils.ByteArray');
	p.push('flash.utils.FlashTimingEngine');
	return p;
};

flash.display.BitmapData.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.BitmapData.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'width', t:'int'});
			p.push({n:'height', t:'int'});
			p.push({n:'transparent', t:'Boolean'});
			p.push({n:'fillColor', t:'uint'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.system.Security
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.system == "undefined")
	flash.system = {};

flash.system.Security = function() {
};

flash.system.Security.allowDomain = function(domains) {
};

flash.system.Security.allowInsecureDomain = function(domains) {
};

flash.system.Security.loadPolicyFile = function(url) {
};

flash.system.Security.className = "flash.system.Security";

flash.system.Security.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.system.Security.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.system.Security.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.net.FileReference
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.net == "undefined")
	flash.net = {};

flash.net.FileReference = function() {
this.name = "";
};

flash.net.FileReference.className = "flash.net.FileReference";

flash.net.FileReference.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.net.FileReference.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.net.FileReference.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.text.GridFitType
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.text == "undefined")
	flash.text = {};

flash.text.GridFitType = function() {
};

flash.text.GridFitType.className = "flash.text.GridFitType";

flash.text.GridFitType.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.text.GridFitType.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.text.GridFitType.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.geom.ColorTransform
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.geom == "undefined")
	flash.geom = {};

flash.geom.ColorTransform = function(redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier, redOffset, greenOffset, blueOffset, alphaOffset) {
};

flash.geom.ColorTransform.className = "flash.geom.ColorTransform";

flash.geom.ColorTransform.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.geom.ColorTransform.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.geom.ColorTransform.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'redMultiplier', t:'Number'});
			p.push({n:'greenMultiplier', t:'Number'});
			p.push({n:'blueMultiplier', t:'Number'});
			p.push({n:'alphaMultiplier', t:'Number'});
			p.push({n:'redOffset', t:'Number'});
			p.push({n:'greenOffset', t:'Number'});
			p.push({n:'blueOffset', t:'Number'});
			p.push({n:'alphaOffset', t:'Number'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.system.Capabilities
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.system == "undefined")
	flash.system = {};

flash.system.Capabilities = function() {
};

flash.system.Capabilities.version = "1.0.0";

flash.system.Capabilities.os = "mockapi";

flash.system.Capabilities.screenDPI = 1;

flash.system.Capabilities.screenResolutionX = 100;

flash.system.Capabilities.screenResolutionY = 100;

flash.system.Capabilities.isDebugger = false;

flash.system.Capabilities.playerType = "js";

flash.system.Capabilities.className = "flash.system.Capabilities";

flash.system.Capabilities.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.system.Capabilities.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.system.Capabilities.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.ui.Multitouch
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.ui == "undefined")
	flash.ui = {};

flash.ui.Multitouch = function() {
};

flash.ui.Multitouch.inputMode;

flash.ui.Multitouch.className = "flash.ui.Multitouch";

flash.ui.Multitouch.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.ui.Multitouch.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.ui.Multitouch.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.net.URLVariables
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.net == "undefined")
	flash.net = {};

flash.net.URLVariables = function(source) {
};

flash.net.URLVariables.prototype.toString = function() {
	var vars = "";
	var v = 0;
	for (var key in this) {
		if (v++ > 0)
			vars += "&";
		vars += key + "=" + escape(this[key]);
	}
	return vars;
};

flash.net.URLVariables.className = "flash.net.URLVariables";

flash.net.URLVariables.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.net.URLVariables.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.net.URLVariables.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'source', t:'String'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.utils.Embed
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.Embed = function(metadata) {
	this.mimeType = "";
	this.source = "";
	this.metadata = metadata;
	if (metadata.source)
		this.source = metadata.source;
	if (metadata.mimeType)
		this.source = metadata.mimeType;
};

flash.utils.Embed.createClass = function(metadata) {
	return metadata;
};

flash.utils.Embed.className = "flash.utils.Embed";

flash.utils.Embed.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.utils.Embed.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.Embed.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'metadata', t:'Object'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.Graphics
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.Graphics = function() {
};

flash.display.Graphics.prototype.beginFill = function(color, alpha) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.beginFill() $$$$");
};

flash.display.Graphics.prototype.beginBitmapFill = function(bitmap, matrix, repeat, smooth) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.beginBitmapFill() $$$$");
};

flash.display.Graphics.prototype.beginGradientFill = function(type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.beginGradientFill() $$$$");
};

flash.display.Graphics.prototype.clear = function() {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.clear() $$$$");
};

flash.display.Graphics.prototype.drawCircle = function(x, y, radius) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.clear() $$$$");
};

flash.display.Graphics.prototype.drawRect = function(x, y, width, height) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.drawRect() $$$$");
};

flash.display.Graphics.prototype.drawRoundRect = function(x, y, width, height, ellipseWidth, ellipseHeight) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.drawRoundRect() $$$$");
};

flash.display.Graphics.prototype.drawGraphicsData = function(graphicsData) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.drawGraphicsData() $$$$");
};

flash.display.Graphics.prototype.endFill = function() {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.endFill() $$$$");
};

flash.display.Graphics.prototype.lineStyle = function(thickness, color, alpha, pixelHinting, scaleMode, caps, joints, miterLimit) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.lineStyle() $$$$");
};

flash.display.Graphics.prototype.lineGradientStyle = function(type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.lineGradientStyle() $$$$");
};

flash.display.Graphics.prototype.lineTo = function(x, y) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.lineTo() $$$$");
};

flash.display.Graphics.prototype.moveTo = function(x, y) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.moveTo() $$$$");
};

flash.display.Graphics.prototype.drawEllipse = function(x, y, width, height) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.drawEllipse() $$$$");
};

flash.display.Graphics.prototype.copyFrom = function(g) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.copyFrom() $$$$");
};

flash.display.Graphics.className = "flash.display.Graphics";

flash.display.Graphics.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.utils.FlashTimingEngine');
	return p;
};

flash.display.Graphics.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.Graphics.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.display3D.Context3DTextureFormat
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display3D == "undefined")
	flash.display3D = {};

flash.display3D.Context3DTextureFormat = function() {
};

flash.display3D.Context3DTextureFormat.BGRA = "bgra";

flash.display3D.Context3DTextureFormat.COMPRESSED = "compress";

flash.display3D.Context3DTextureFormat.COMPRESSED_ALPHA = "compressedAlpha";

flash.display3D.Context3DTextureFormat.className = "flash.display3D.Context3DTextureFormat";

flash.display3D.Context3DTextureFormat.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.Context3DTextureFormat.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.Context3DTextureFormat.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.display3D.Context3DVertexBufferFormat
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display3D == "undefined")
	flash.display3D = {};

flash.display3D.Context3DVertexBufferFormat = function() {
};

flash.display3D.Context3DVertexBufferFormat.BYTES_4 = "bytes4";

flash.display3D.Context3DVertexBufferFormat.FLOAT_1 = "float1";

flash.display3D.Context3DVertexBufferFormat.FLOAT_2 = "float2";

flash.display3D.Context3DVertexBufferFormat.FLOAT_3 = "float3";

flash.display3D.Context3DVertexBufferFormat.FLOAT_4 = "float4";

flash.display3D.Context3DVertexBufferFormat.className = "flash.display3D.Context3DVertexBufferFormat";

flash.display3D.Context3DVertexBufferFormat.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.Context3DVertexBufferFormat.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.Context3DVertexBufferFormat.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.external.ExternalInterface
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.external == "undefined")
	flash.external = {};

flash.external.ExternalInterface = function() {
	
};

flash.external.ExternalInterface.available = false;

flash.external.ExternalInterface.objectID = "null";

flash.external.ExternalInterface.addCallback = function(functionName, closure) {
};

flash.external.ExternalInterface.call = function(functionName, args) {
	return "";
};

flash.external.ExternalInterface.className = "flash.external.ExternalInterface";

flash.external.ExternalInterface.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.external.ExternalInterface.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.external.ExternalInterface.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.ui.MouseCursor
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.ui == "undefined")
	flash.ui = {};

flash.ui.MouseCursor = function() {
};

flash.ui.MouseCursor.AUTO = "auto";

flash.ui.MouseCursor.BUTTON = "button";

flash.ui.MouseCursor.ARROW = "arrow";

flash.ui.MouseCursor.HAND = "hand";

flash.ui.MouseCursor.className = "flash.ui.MouseCursor";

flash.ui.MouseCursor.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.ui.MouseCursor.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.ui.MouseCursor.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.display.BlendMode
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.BlendMode = function() {
};

flash.display.BlendMode.NORMAL = "normal";

flash.display.BlendMode.MULTIPLY = "MULTIPLY";

flash.display.BlendMode.ADD = "add";

flash.display.BlendMode.SUBTRACT = "subtract";

flash.display.BlendMode.OVERLAY = "overlay";

flash.display.BlendMode.className = "flash.display.BlendMode";

flash.display.BlendMode.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.BlendMode.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.BlendMode.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.net.URLRequest
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.net == "undefined")
	flash.net = {};

flash.net.URLRequest = function(url) {
	this.method = "get";
	this.url = url;
};

flash.net.URLRequest.className = "flash.net.URLRequest";

flash.net.URLRequest.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.net.URLRequest.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.net.URLRequest.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'url', t:'String'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.globalization.DateTimeFormatter
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.globalization == "undefined")
	flash.globalization = {};

flash.globalization.DateTimeFormatter = function(requestedLocaleIDName, dateStyle, timeStyle) {
};

flash.globalization.DateTimeFormatter.prototype.getMonthNames = function(nameStyle, context) {
	var months = [];
	months.push("January");
	months.push("February");
	months.push("March");
	months.push("April");
	months.push("May");
	months.push("June");
	months.push("July");
	months.push("August");
	months.push("Spetember");
	months.push("October");
	months.push("November");
	months.push("December");
	return months;
};

flash.globalization.DateTimeFormatter.className = "flash.globalization.DateTimeFormatter";

flash.globalization.DateTimeFormatter.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.globalization.DateTimeFormatter.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.globalization.DateTimeFormatter.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'requestedLocaleIDName', t:'String'});
			p.push({n:'dateStyle', t:'String'});
			p.push({n:'timeStyle', t:'String'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.events.HTTPStatusEvent
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.HTTPStatusEvent = function(type, bubbles, cancelable, status) {
	this.status = status;
};

flash.events.HTTPStatusEvent.HTTP_STATUS = "httpStatus";

flash.events.HTTPStatusEvent.className = "flash.events.HTTPStatusEvent";

flash.events.HTTPStatusEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.HTTPStatusEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.HTTPStatusEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			p.push({n:'status', t:'int'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.geom.Point
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.geom == "undefined")
	flash.geom = {};

flash.geom.Point = function(x, y) {
	this.x = x;
	this.y = y;
};

flash.geom.Point.interpolate = function(pt1, pt2, f) {
	var xDis = (pt2.x - pt1.x);
	var yDis = (pt2.y - pt1.y);
	return new flash.geom.Point(pt1.x + (xDis * f), pt1.y + (xDis * f));
};

flash.geom.Point.distance = function(pt1, pt2) {
	var a = pt1.x - pt2.x;
	var b = pt1.y - pt2.y;
	return Math.sqrt(a * a + b * b);
};

flash.geom.Point.prototype.clone = function() {
	return new flash.geom.Point(this.x, this.y);
};

flash.geom.Point.prototype.normalize = function(thickness) {
};

flash.geom.Point.prototype.get_length = function() {
	return Math.sqrt(this.x * this.x + this.y * this.y);
};

flash.geom.Point.prototype.add = function(v) {
	return new flash.geom.Point(this.x + v.x, this.y + v.y);
};

flash.geom.Point.prototype.subtract = function(v) {
	return new flash.geom.Point(this.x - v.x, this.y - v.y);
};

flash.geom.Point.prototype.equals = function(toCompare) {
	return (this.x == toCompare.x && this.y == toCompare.y);
};

flash.geom.Point.prototype.toString = function() {
	return "Point";
};

flash.geom.Point.prototype.setTo = function(xa, ya) {
	this.x = xa;
	this.y = ya;
};

flash.geom.Point.className = "flash.geom.Point";

flash.geom.Point.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.geom.Point.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.geom.Point.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'x', t:'Number'});
			p.push({n:'y', t:'Number'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.text.Font
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.text == "undefined")
	flash.text = {};

flash.text.Font = function() {
};

flash.text.Font.className = "flash.text.Font";

flash.text.Font.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.text.Font.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.text.Font.injectionPoints = function(t) {
	return [];
};

// ====================================================
// mx.core.FontAsset
// ====================================================

if (typeof mx == "undefined")
	var mx = {};
if (typeof mx.core == "undefined")
	mx.core = {};

mx.core.FontAsset = function() {
	flash.text.Font.call(this);
};

$inherit(mx.core.FontAsset, flash.text.Font);

mx.core.FontAsset.className = "mx.core.FontAsset";

mx.core.FontAsset.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

mx.core.FontAsset.getStaticDependencies = function(t) {
	var p;
	return [];
};

mx.core.FontAsset.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.text.Font.injectionPoints(t);
			break;
		case 2:
			p = flash.text.Font.injectionPoints(t);
			break;
		case 3:
			p = flash.text.Font.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.StageAlign
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.StageAlign = function() {
};

flash.display.StageAlign.TOP_LEFT = "topLeft";

flash.display.StageAlign.className = "flash.display.StageAlign";

flash.display.StageAlign.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.StageAlign.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.StageAlign.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.utils.RequestAnimationFrame
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.RequestAnimationFrame = function() {
	
};

flash.utils.RequestAnimationFrame.prototype.request = function(callback) {
	var w = Window;
	var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.mozRequestAnimationFrame || w.oRequestAnimationFrame || w.msRequestAnimationFrame || function(callback) {
		setTimeout(callback, 1000 / 60);
	};
	requestAnimationFrame($createStaticDelegate(this, callback));
};

flash.utils.RequestAnimationFrame.className = "flash.utils.RequestAnimationFrame";

flash.utils.RequestAnimationFrame.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.utils.RequestAnimationFrame.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.RequestAnimationFrame.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.geom.Rectangle
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.geom == "undefined")
	flash.geom = {};

flash.geom.Rectangle = function(x, y, width, height) {
	this._bottom = 0;
	this.topLeftPoint = new flash.geom.Point(0, 0);
	this._right = 0;
	this.sizePoint = new flash.geom.Point(0, 0);
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};

flash.geom.Rectangle.prototype.clone = function() {
	return new flash.geom.Rectangle(this.x, this.y, this.width, this.height);
};

flash.geom.Rectangle.prototype.union = function(toUnion) {
	if (toUnion.width == 0 || toUnion.height == 0)
		return this;
	var leftX = Math.min(this.x, toUnion.x);
	var leftY = Math.min(this.y, toUnion.y);
	var newW = Math.max(this.x + this.width, toUnion.x + toUnion.width) - leftX;
	var newH = Math.max(this.y + this.height, toUnion.y + toUnion.height) - leftY;
	return new flash.geom.Rectangle(leftX, leftY, newW, newH);
};

flash.geom.Rectangle.prototype.inflate = function(dx, dy) {
	this.x -= dx;
	this.width += 2 * dx;
	this.y -= dy;
	this.height += 2 * dy;
};

flash.geom.Rectangle.prototype.get_left = function() {
	return this.x;
};

flash.geom.Rectangle.prototype.set_left = function(value) {
	this.x = value;
};

flash.geom.Rectangle.prototype.get_top = function() {
	return this.y;
};

flash.geom.Rectangle.prototype.set_top = function(value) {
	this.y = value;
};

flash.geom.Rectangle.prototype.get_right = function() {
	return this.x + this.width;
};

flash.geom.Rectangle.prototype.set_right = function(value) {
	this.width = value - this.x;
};

flash.geom.Rectangle.prototype.get_bottom = function() {
	return this.y + this.height;
};

flash.geom.Rectangle.prototype.set_bottom = function(value) {
	this.height = value - this.y;
};

flash.geom.Rectangle.prototype.get_topLeft = function() {
	this.topLeftPoint.x = this.x;
	this.topLeftPoint.y = this.y;
	return this.topLeftPoint;
};

flash.geom.Rectangle.prototype.set_topLeft = function(value) {
	this.x = value.x;
	this.y = value.y;
};

flash.geom.Rectangle.prototype.contains = function(cx, cy) {
	return (cx >= this.x && cx <= this.get_right() && cy >= this.y && cy <= this.get_bottom());
};

flash.geom.Rectangle.prototype.containsPoint = function(point) {
	return this.contains(point.x, point.y);
};

flash.geom.Rectangle.prototype.get_size = function() {
	this.sizePoint.x = this.width;
	this.sizePoint.y = this.height;
	return this.sizePoint;
};

flash.geom.Rectangle.prototype.set_size = function(value) {
	this.width = value.x;
	this.height = value.y;
};

flash.geom.Rectangle.prototype.offset = function(dx, dy) {
	this.x += dx;
	this.y += dy;
};

flash.geom.Rectangle.prototype.intersects = function(toIntersect) {
	return !(toIntersect.get_left() > this.get_right() || toIntersect.get_right() < this.get_left() || toIntersect.get_top() > this.get_bottom() || toIntersect.get_bottom() < this.get_top());
};

flash.geom.Rectangle.prototype.intersection = function(toIntersect) {
	var rect = new flash.geom.Rectangle(0, 0, 0, 0);
	if (this.intersects(toIntersect)) {
		if (toIntersect.get_left() <= this.get_right()) {
			rect.x = toIntersect.get_left();
			rect.width = this.get_right() - rect.x;
		} else {
			rect.x = this.get_left();
			rect.width = toIntersect.get_right() - rect.x;
		}
		rect.y = (toIntersect.get_top() < this.get_top()) ? this.get_top() : toIntersect.get_top();
		rect.height = (toIntersect.get_bottom() < this.get_bottom()) ? toIntersect.get_bottom() : this.get_bottom();
		rect.height = rect.height - rect.y;
	}
	return rect;
};

flash.geom.Rectangle.prototype.isEmpty = function() {
	return this.width <= 0 || this.height <= 0;
};

flash.geom.Rectangle.prototype.setEmpty = function() {
	this.x = 0;
	this.y = 0;
	this.width = 0;
	this.height = 0;
};

flash.geom.Rectangle.prototype.setTo = function(xa, ya, widtha, heighta) {
	this.x = xa;
	this.y = ya;
	this.width = widtha;
	this.height = heighta;
};

flash.geom.Rectangle.className = "flash.geom.Rectangle";

flash.geom.Rectangle.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.geom.Point');
	return p;
};

flash.geom.Rectangle.getStaticDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.geom.Point');
	return p;
};

flash.geom.Rectangle.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'x', t:'Number'});
			p.push({n:'y', t:'Number'});
			p.push({n:'width', t:'Number'});
			p.push({n:'height', t:'Number'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display3D.Context3DBlendFactor
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display3D == "undefined")
	flash.display3D = {};

flash.display3D.Context3DBlendFactor = function() {
};

flash.display3D.Context3DBlendFactor.DESTINATION_ALPHA = "destinationAlpha";

flash.display3D.Context3DBlendFactor.DESTINATION_COLOR = "destinationColor";

flash.display3D.Context3DBlendFactor.ONE = "one";

flash.display3D.Context3DBlendFactor.ONE_MINUS_DESTINATION_ALPHA = "oneMinusDestinationAlpha";

flash.display3D.Context3DBlendFactor.ONE_MINUS_DESTINATION_COLOR = "oneMinusDestinationColor";

flash.display3D.Context3DBlendFactor.ONE_MINUS_SOURCE_ALPHA = "oneMinusSourceAlpha";

flash.display3D.Context3DBlendFactor.ONE_MINUS_SOURCE_COLOR = "oneMinusSourceColor";

flash.display3D.Context3DBlendFactor.SOURCE_ALPHA = "sourceAlpha";

flash.display3D.Context3DBlendFactor.SOURCE_COLOR = "sourceColor";

flash.display3D.Context3DBlendFactor.ZERO = "zero";

flash.display3D.Context3DBlendFactor.className = "flash.display3D.Context3DBlendFactor";

flash.display3D.Context3DBlendFactor.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.Context3DBlendFactor.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.Context3DBlendFactor.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.display.GraphicsGradientFill
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.GraphicsGradientFill = function() {
this.colors = null;
this.matrix = null;
};

flash.display.GraphicsGradientFill.className = "flash.display.GraphicsGradientFill";

flash.display.GraphicsGradientFill.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.GraphicsGradientFill.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.GraphicsGradientFill.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.errors.IllegalOperationError
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.errors == "undefined")
	flash.errors = {};

flash.errors.IllegalOperationError = function(message, id) {
	Error.call(this, message, id);
};

$inherit(flash.errors.IllegalOperationError, Error);

flash.errors.IllegalOperationError.className = "flash.errors.IllegalOperationError";

flash.errors.IllegalOperationError.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.errors.IllegalOperationError.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.errors.IllegalOperationError.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'message', t:'Object'});
			p.push({n:'id', t:'Object'});
			break;
		case 1:
			p = Error.injectionPoints(t);
			break;
		case 2:
			p = Error.injectionPoints(t);
			break;
		case 3:
			p = Error.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.system.System
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.system == "undefined")
	flash.system = {};

flash.system.System = function() {
};

flash.system.System.freeMemory = 0;

flash.system.System.privateMemory = 0;

flash.system.System.totalMemory = 0;

flash.system.System.setClipboard = function(message) {
};

flash.system.System.gc = function() {
};

flash.system.System.pauseForGCIfCollectionImminent = function() {
};

flash.system.System.className = "flash.system.System";

flash.system.System.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.system.System.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.system.System.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.display.PixelSnapping
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.PixelSnapping = function() {
};

flash.display.PixelSnapping.NEVER = "never";

flash.display.PixelSnapping.AUTO = "auto";

flash.display.PixelSnapping.className = "flash.display.PixelSnapping";

flash.display.PixelSnapping.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.PixelSnapping.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.PixelSnapping.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.ui.Keyboard
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.ui == "undefined")
	flash.ui = {};

flash.ui.Keyboard = function() {
};

flash.ui.Keyboard.A = 65;

flash.ui.Keyboard.B = 66;

flash.ui.Keyboard.BACKQUOTE = 192;

flash.ui.Keyboard.BACKSPACE = 8;

flash.ui.Keyboard.BACKSLASH = 220;

flash.ui.Keyboard.C = 67;

flash.ui.Keyboard.D = 68;

flash.ui.Keyboard.E = 69;

flash.ui.Keyboard.END = 35;

flash.ui.Keyboard.F = 70;

flash.ui.Keyboard.G = 71;

flash.ui.Keyboard.H = 72;

flash.ui.Keyboard.HOME = 36;

flash.ui.Keyboard.I = 73;

flash.ui.Keyboard.J = 74;

flash.ui.Keyboard.K = 75;

flash.ui.Keyboard.L = 76;

flash.ui.Keyboard.M = 77;

flash.ui.Keyboard.N = 78;

flash.ui.Keyboard.NUMBER_0 = 48;

flash.ui.Keyboard.NUMBER_9 = 57;

flash.ui.Keyboard.O = 79;

flash.ui.Keyboard.P = 80;

flash.ui.Keyboard.Q = 81;

flash.ui.Keyboard.R = 82;

flash.ui.Keyboard.S = 83;

flash.ui.Keyboard.SPACE = 32;

flash.ui.Keyboard.T = 84;

flash.ui.Keyboard.U = 85;

flash.ui.Keyboard.V = 86;

flash.ui.Keyboard.W = 87;

flash.ui.Keyboard.X = 88;

flash.ui.Keyboard.Y = 89;

flash.ui.Keyboard.Z = 90;

flash.ui.Keyboard.ENTER = 13;

flash.ui.Keyboard.RIGHT = 39;

flash.ui.Keyboard.LEFT = 37;

flash.ui.Keyboard.DOWN = 40;

flash.ui.Keyboard.UP = 38;

flash.ui.Keyboard.TAB = 9;

flash.ui.Keyboard.CONTROL = 17;

flash.ui.Keyboard.ESCAPE = 27;

flash.ui.Keyboard.className = "flash.ui.Keyboard";

flash.ui.Keyboard.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.ui.Keyboard.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.ui.Keyboard.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.geom.Matrix
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.geom == "undefined")
	flash.geom = {};

flash.geom.Matrix = function(a, b, c, d, tx, ty) {
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;
	this.tx = tx;
	this.ty = ty;
};

flash.geom.Matrix.prototype.identity = function() {
	this.a = 1;
	this.b = 0;
	this.c = 0;
	this.d = 1;
	this.tx = 0;
	this.ty = 0;
};

flash.geom.Matrix.prototype.setTo = function(aa, ba, ca, da, txa, tya) {
	this.a = aa;
	this.b = ba;
	this.c = ca;
	this.d = da;
	this.tx = txa;
	this.ty = tya;
};

flash.geom.Matrix.prototype.concat = function(m) {
	var aT = this.a;
	var cT = this.c;
	var txT = this.tx;
	this.a = aT * m.a + this.b * m.c;
	this.b = aT * m.b + this.b * m.d;
	this.c = cT * m.a + this.d * m.c;
	this.d = cT * m.b + this.d * m.d;
	this.tx = txT * m.a + this.ty * m.c + m.tx;
	this.ty = txT * m.b + this.ty * m.d + m.ty;
};

flash.geom.Matrix.prototype.copyFrom = function(sourceMatrix) {
	this.a = sourceMatrix.a;
	this.b = sourceMatrix.b;
	this.c = sourceMatrix.c;
	this.d = sourceMatrix.d;
	this.tx = sourceMatrix.tx;
	this.ty = sourceMatrix.ty;
};

flash.geom.Matrix.prototype.invert = function() {
	var b01 = this.d;
	var b11 = -1 * this.c;
	var b21 = this.ty * this.c - this.d * this.tx;
	var det = this.a * b01 + this.b * b11;
	det = 1.0 / det;
	this.a = b01 * det;
	this.b = (-1 * this.b) * det;
	this.c = b11 * det;
	this.d = (1 * this.a) * det;
	this.tx = b21 * det;
	this.ty = (-this.ty * this.a + this.b * this.tx) * det;
};

flash.geom.Matrix.prototype.rotate = function(angle) {
	var s = Math.sin(angle);
	var c = Math.cos(angle);
	var m = new flash.geom.Matrix(c, s, -s, c, 0, 0);
	this.concat(m);
};

flash.geom.Matrix.prototype.scale = function(sx, sy) {
	var m = new flash.geom.Matrix(sx, 0, 0, sy, 0, 0);
	this.concat(m);
};

flash.geom.Matrix.prototype.translate = function(dx, dy) {
	this.tx = dx;
	this.ty = dy;
};

flash.geom.Matrix.prototype.createGradientBox = function(width, height, rotation, tx, ty) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Matrix.createGradientBox() $$$$");
};

flash.geom.Matrix.className = "flash.geom.Matrix";

flash.geom.Matrix.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.utils.FlashTimingEngine');
	return p;
};

flash.geom.Matrix.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.geom.Matrix.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'a', t:'Number'});
			p.push({n:'b', t:'Number'});
			p.push({n:'c', t:'Number'});
			p.push({n:'d', t:'Number'});
			p.push({n:'tx', t:'Number'});
			p.push({n:'ty', t:'Number'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.BitmapDataChannel
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.BitmapDataChannel = function() {
	
};

flash.display.BitmapDataChannel.ALPHA = 8;

flash.display.BitmapDataChannel.BLUE = 4;

flash.display.BitmapDataChannel.GREEN = 2;

flash.display.BitmapDataChannel.RED = 1;

flash.display.BitmapDataChannel.className = "flash.display.BitmapDataChannel";

flash.display.BitmapDataChannel.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.BitmapDataChannel.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.BitmapDataChannel.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.display.GradientType
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.GradientType = function() {
};

flash.display.GradientType.LINEAR = "linear";

flash.display.GradientType.RADIAL = "radial";

flash.display.GradientType.className = "flash.display.GradientType";

flash.display.GradientType.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.GradientType.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.GradientType.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.display.Shader
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.Shader = function(code) {
};

flash.display.Shader.className = "flash.display.Shader";

flash.display.Shader.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.Shader.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.Shader.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'code', t:'flash.utils.ByteArray'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.text.TextFieldAutoSize
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.text == "undefined")
	flash.text = {};

flash.text.TextFieldAutoSize = function() {
};

flash.text.TextFieldAutoSize.CENTER = "center";

flash.text.TextFieldAutoSize.LEFT = "left";

flash.text.TextFieldAutoSize.NONE = "none";

flash.text.TextFieldAutoSize.RIGHT = "right";

flash.text.TextFieldAutoSize.className = "flash.text.TextFieldAutoSize";

flash.text.TextFieldAutoSize.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.text.TextFieldAutoSize.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.text.TextFieldAutoSize.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.media.SoundLoaderContext
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.media == "undefined")
	flash.media = {};

flash.media.SoundLoaderContext = function(bufferTime, checkPolicyFile) {
	this.bufferTime = bufferTime;
	this.checkPolicyFile = checkPolicyFile;
};

flash.media.SoundLoaderContext.className = "flash.media.SoundLoaderContext";

flash.media.SoundLoaderContext.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.media.SoundLoaderContext.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.media.SoundLoaderContext.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'bufferTime', t:'Number'});
			p.push({n:'checkPolicyFile', t:'Boolean'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.ui.Mouse
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.ui == "undefined")
	flash.ui = {};

flash.ui.Mouse = function() {
};

flash.ui.Mouse.hide = function() {
};

flash.ui.Mouse.registerCursor = function(name, cursor) {
};

flash.ui.Mouse.show = function() {
};

flash.ui.Mouse.cursor = "";

flash.ui.Mouse.supportsCursor = true;

flash.ui.Mouse.className = "flash.ui.Mouse";

flash.ui.Mouse.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.ui.Mouse.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.ui.Mouse.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.geom.Vector3D
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.geom == "undefined")
	flash.geom = {};

flash.geom.Vector3D = function(x, y, z, w) {
};

flash.geom.Vector3D.className = "flash.geom.Vector3D";

flash.geom.Vector3D.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.geom.Vector3D.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.geom.Vector3D.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'x', t:'Number'});
			p.push({n:'y', t:'Number'});
			p.push({n:'z', t:'Number'});
			p.push({n:'w', t:'Number'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.text.TextFieldType
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.text == "undefined")
	flash.text = {};

flash.text.TextFieldType = function() {
};

flash.text.TextFieldType.INPUT = "input";

flash.text.TextFieldType.DYNAMIC = "dynamic";

flash.text.TextFieldType.className = "flash.text.TextFieldType";

flash.text.TextFieldType.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.text.TextFieldType.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.text.TextFieldType.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.ui.MultitouchInputMode
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.ui == "undefined")
	flash.ui = {};

flash.ui.MultitouchInputMode = function() {
};

flash.ui.MultitouchInputMode.GESTURE = "gesture";

flash.ui.MultitouchInputMode.NONE = "none";

flash.ui.MultitouchInputMode.TOUCH_POINT = "touchPoint";

flash.ui.MultitouchInputMode.className = "flash.ui.MultitouchInputMode";

flash.ui.MultitouchInputMode.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.ui.MultitouchInputMode.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.ui.MultitouchInputMode.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.media.SoundTransform
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.media == "undefined")
	flash.media = {};

flash.media.SoundTransform = function(vol, panning) {
	this.buffer = null;
	this.soundID = null;
	this._volume = 0;
	this.transforms = null;
	this.pan = null;
	this.soundID = "SoundTransform" + Math.floor(Math.random() * 0xffff);
};

flash.media.SoundTransform.prototype.get_volume = function() {
	return this._volume;
};

flash.media.SoundTransform.prototype.set_volume = function(value) {
	this._volume = value;
};

flash.media.SoundTransform.prototype.addTransform = function(transform) {
	if (!this.transforms)
		this.transforms = new flash.utils.Dictionary(false);
	this.transforms[transform] = transform;
};

flash.media.SoundTransform.prototype.removeTransform = function(transform) {
	if (!this.transforms)
		return;
	this.transforms[transform] = null;
	delete this.transforms[transform];
};

flash.media.SoundTransform.prototype.toString = function() {
	return this.soundID;
};

flash.media.SoundTransform.className = "flash.media.SoundTransform";

flash.media.SoundTransform.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.utils.Dictionary');
	return p;
};

flash.media.SoundTransform.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.media.SoundTransform.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'vol', t:'Number'});
			p.push({n:'panning', t:'Number'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.net.URLRequestMethod
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.net == "undefined")
	flash.net = {};

flash.net.URLRequestMethod = function() {
};

flash.net.URLRequestMethod.GET = "get";

flash.net.URLRequestMethod.POST = "post";

flash.net.URLRequestMethod.className = "flash.net.URLRequestMethod";

flash.net.URLRequestMethod.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.net.URLRequestMethod.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.net.URLRequestMethod.injectionPoints = function(t) {
	return [];
};
