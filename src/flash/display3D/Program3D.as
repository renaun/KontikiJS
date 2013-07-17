/*
Copyright 2012-2013 Renaun Erickson

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

@author Renaun Erickson / renaun.com / @renaun
*/

package flash.display3D
{
	import flash.utils.ByteArray;
	
	import randori.webkit.html.canvas.WebGLProgram;
	import randori.webkit.html.canvas.WebGLRenderingContext;
	import randori.webkit.html.canvas.WebGLShader;
	import randori.webkit.html.canvas.WebGLUniformLocation;

public class Program3D
{
	public function Program3D()
	{
	}
	
	// WebGL implementation specific
	public var context3D:Context3D;
	public var shaderProgram:WebGLProgram;
	public var shaderVertex:WebGLShader;
	public var shaderFragment:WebGLShader;
	public var registerOrdering:Array = [];
	// Shader Specific
	private var vertexPositionAttribute:Object;
	private var textureCoordAttribute:Object;
	private var colorAttribute:Object;
	public var mvMatrixUniform:WebGLUniformLocation;
	private var samplerUniform:WebGLUniformLocation;
	
	
	public function dispose():void
	{
		context3D.webglContext.deleteShader(shaderVertex);
		context3D.webglContext.deleteShader(shaderFragment);
		context3D.webglContext.deleteProgram(shaderProgram);
	}
	
	public function upload(vertexProgram:ByteArray, fragmentProgram:ByteArray):void
	{
		registerOrdering = [];
		// TEMP TO SEE WHATS RUNNING
		var shaderFragmentSrc:Array = [	"precision mediump float;",
			"varying vec2 vTextureCoord;",
			"varying float vColor;",
			"uniform sampler2D uSampler;",
			"void main(void) {",
			"gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y));",
			"gl_FragColor = gl_FragColor * vColor;",
			"}"];
		
		var shaderVertexSrc:Array = [	"attribute vec2 aVertexPosition;",
			"attribute vec2 aTextureCoord;",
			"attribute float aColor;",
			"uniform mat4 uMVMatrix;",
			"varying vec2 vTextureCoord;",
			"varying float vColor;",
			"void main(void) {",
			"gl_Position = uMVMatrix * vec4(aVertexPosition, 1.0, 1.0);",
			"vTextureCoord = aTextureCoord;",
			"vColor = aColor;",
			"}"];
		shaderProgram = context3D.webglContext.createProgram();
		var shaderVertex:WebGLShader = compileShader(shaderVertexSrc, WebGLRenderingContext.VERTEX_SHADER);
		context3D.webglContext.attachShader(shaderProgram, shaderVertex);
		var shaderFragment:WebGLShader = compileShader(shaderFragmentSrc, WebGLRenderingContext.FRAGMENT_SHADER);
		context3D.webglContext.attachShader(shaderProgram, shaderFragment);
		
		context3D.webglContext.linkProgram(shaderProgram);
		
		if (!context3D.webglContext.getProgramParameter(shaderProgram, WebGLRenderingContext.LINK_STATUS)) {
			throw new Error("Could not initialize shaders");
		}
		
		context3D.webglContext.useProgram(shaderProgram);
		
// These have be ordered to now the attribute registers are orderring in the vertice data chunks		
		vertexPositionAttribute = context3D.webglContext.getAttribLocation(shaderProgram, "aVertexPosition");
		context3D.webglContext.enableVertexAttribArray(vertexPositionAttribute);
		registerOrdering.push(vertexPositionAttribute);
		
		colorAttribute = context3D.webglContext.getAttribLocation(shaderProgram, "aColor");
		context3D.webglContext.enableVertexAttribArray(colorAttribute);
		registerOrdering.push(colorAttribute);
		
		textureCoordAttribute = context3D.webglContext.getAttribLocation(shaderProgram, "aTextureCoord");
		context3D.webglContext.enableVertexAttribArray(textureCoordAttribute);
		registerOrdering.push(textureCoordAttribute);
		
		
		mvMatrixUniform = context3D.webglContext.getUniformLocation(shaderProgram, "uMVMatrix");
		samplerUniform = context3D.webglContext.getUniformLocation(shaderProgram, "uSampler");
	}
	
	// TODO Make these static and pass in the WebGLRenderingContext
	
	private function compileShader(shaderSrc:Array, shaderType:Object):WebGLShader
	{
		var src:String = shaderSrc.join("\n");
		var shader:WebGLShader = context3D.webglContext.createShader(shaderType);
		
		context3D.webglContext.shaderSource(shader, src);
		context3D.webglContext.compileShader(shader);
		
		if (!context3D.webglContext.getShaderParameter(shader, WebGLRenderingContext.COMPILE_STATUS)) {
			trace(context3D.webglContext.getShaderInfoLog(shader));
			return null;
		}
		
		return shader;
	}
}
}