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
	
	import randori.webkit.html.canvas.WebGLBuffer;
	import randori.webkit.html.canvas.WebGLRenderingContext;
	
	import renaun.html.stub.ArrayBuffer;
	import renaun.html.stub.Float32Array;

public class VertexBuffer3D
{
	public function VertexBuffer3D(context3D:Context3D, numVertices:int, data32PerVertex:int)
	{
		this.context3D = context3D;
		buffer = context3D.webglContext.createBuffer();
		this.numVertices = numVertices;
		this.data32PerVertex = data32PerVertex;
	}
	// WebGL implementation specific
	public var context3D:Context3D;
	public var buffer:WebGLBuffer;
	public var verticies:ArrayBuffer;
	public var numVertices:int;
	public var data32PerVertex:int;
	
	public function uploadFromVector(data:Vector.<Number>, startVertex:int, numVertices:int):void
	{
		trace("VertexBuffer3D.uploadFromVector: " + data.length + " startVertex: " + startVertex + " nV: " + numVertices + "  data32PerVertex: " + data32PerVertex);
		// data.length * 4 or just data.length
		verticies = new ArrayBuffer(data.length * 4);
		var floatArr:Float32Array = new Float32Array(verticies);
		for (var i:int = 0; i < data.length; i++)
		{
			floatArr[i] = data[i];
		}
		
		context3D.webglContext.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, buffer);
		// DYNAMIC_DRAW vs STATIC_DRAW
		context3D.webglContext.bufferData1(WebGLRenderingContext.ARRAY_BUFFER, verticies as randori.webkit.html.canvas.ArrayBuffer, WebGLRenderingContext.STATIC_DRAW);
		context3D.lastVertexBuffer = this;
	}
	
	
	public function uploadFromByteArray(data:ByteArray, byteArrayOffset:int, startVertex:int, numVertices:int):void
	{
		trace("VertexBuffer3D.uploadFromByteArray: " + data.length + " startVertex: " + startVertex + " nV: " + numVertices + "  byteArrayOffset: " + byteArrayOffset);
		// data.length * 4 or just data.length
		verticies = data.getArrayBuffer();
		
		context3D.webglContext.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, buffer);
		// DYNAMIC_DRAW vs STATIC_DRAW
		context3D.webglContext.bufferData1(WebGLRenderingContext.ARRAY_BUFFER, verticies as randori.webkit.html.canvas.ArrayBuffer, WebGLRenderingContext.STATIC_DRAW);
		context3D.lastVertexBuffer = this;
	}
	
	// WebGL specific
	public function uploadLast():void
	{
		
		context3D.webglContext.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, buffer);
		context3D.webglContext.bufferData1(WebGLRenderingContext.ARRAY_BUFFER, verticies as randori.webkit.html.canvas.ArrayBuffer, WebGLRenderingContext.DYNAMIC_DRAW);
		context3D.lastVertexBuffer = this;
	}
	
	public function dispose():void
	{
		
	}
}
}