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
	public function Program3D(context3D:Context3D)
	{
		this.context3D = context3D;
		shaderProgram = context3D.webglContext.createProgram();
	}
	
	// WebGL implementation specific
	public var context3D:Context3D;
	public var shaderProgram:WebGLProgram;
	public var shaderVertex:WebGLShader;
	public var shaderFragment:WebGLShader;
	// Shader Specific
	private var vertexPositionAttribute:Object;
	private var textureCoordAttribute:Object;
	private var colorAttribute:Object;
	public var mvMatrixUniform:WebGLUniformLocation;
	private var samplerUniform:WebGLUniformLocation;

	public var shaderVertexSrc:Array;

	public var shaderFragmentSrc:Array;
	
	
	public function dispose():void
	{
		context3D.webglContext.deleteShader(shaderVertex);
		context3D.webglContext.deleteShader(shaderFragment);
		context3D.webglContext.deleteProgram(shaderProgram);
	}
	
	public function upload(vertexProgram:ByteArray, fragmentProgram:ByteArray):void
	{
		/*
		var shaderVertexSrc:Array = [	"attribute vec2 va0;",
			"attribute vec2 va2;",
			"attribute float va1;",
			"uniform mat4 vc1;",
			"varying vec2 v2;",
			"varying float v1;",
			"void main(void) {",
			"gl_Position = vc1 * vec4(va0, 1.0, 1.0);",
			"v2 = va2;",
			"v1 = va1;",
			"}"];
		
		
		var shaderFragmentSrc:Array = [	"precision mediump float;",
			"varying vec2 v2;",
			"varying float v1;",
			"uniform sampler2D fs0;",
			"void main(void) {",
			"gl_FragColor = texture2D(fs0, vec2(v2.x, v2.y));",
			"gl_FragColor = gl_FragColor * v1;",
			"}"];
		
		var shaderVertexSrc:Array = [	"attribute vec2 va0;",
			"attribute vec2 va2;",
			"uniform mat4 vc1;",
			"varying vec2 v2;",
			"void main(void) {",
			"gl_Position = vc1 * vec4(va0, 1.0, 1.0);",
			"v2 = va2;",
			"}"];
		
		
		var shaderFragmentSrc:Array = [	"precision mediump float;",
			"varying vec2 v2;",
			"uniform sampler2D fs0;",
			"void main(void) {",
			"gl_FragColor = texture2D(fs0, vec2(v2.x, v2.y));",
			"}"];
		*/
		// TODO Cache Compiled Shaders
		shaderVertexSrc = vertexProgram as Array;
		shaderFragmentSrc = fragmentProgram as Array;
		
		var shaderVertex:WebGLShader = compileShader(shaderVertexSrc, WebGLRenderingContext.VERTEX_SHADER);
		var shaderFragment:WebGLShader = compileShader(shaderFragmentSrc, WebGLRenderingContext.FRAGMENT_SHADER);
		
		context3D.webglContext.attachShader(shaderProgram, shaderVertex);
		context3D.webglContext.attachShader(shaderProgram, shaderFragment);
		context3D.webglContext.linkProgram(shaderProgram);
		
		if (!context3D.webglContext.getProgramParameter(shaderProgram, WebGLRenderingContext.LINK_STATUS)) {
			throw new Error("Could not initialize shaders");
		}
		/*
		
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
		*/
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
	
	public function focusProgram():void
	{
		context3D.webglContext.useProgram(shaderProgram);
	}
}
}