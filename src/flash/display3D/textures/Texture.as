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

package flash.display3D.textures
{
import flash.display.BitmapData;
import flash.display3D.Context3D;
import flash.utils.ByteArray;
import flash.utils.FlashTimingEngine;

import randori.webkit.html.canvas.WebGLRenderingContext;
import randori.webkit.html.canvas.WebGLTexture;

import renaun.html.stub.WebGLRenderingContext2;

public class Texture extends TextureBase
{
	public function Texture()
	{
		super();
	}
	
	public function uploadCompressedTextureFromByteArray(data:ByteArray, byteArrayOffset:uint, async:Boolean = false):void
	{
		
	}
	
	public function uploadFromBitmapData(source:BitmapData, miplevel:uint = 0):void
	{
		trace("Stage3D Texture.uploadFromBitmapData TEXTURE");
		if (miplevel > 0) // REE: For now ignore miplevels
			return;
		// TODO Not sure how to handle case where there is an existing texture or disposing
		if(!_webglTexture)
			_webglTexture = context3D.webglContext.createTexture();
		
		if (!source.image)
		{
			FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Texture.uploadFromBitmapData() - NO IMAGE DATA $$$$");
		}
		
		var gl:WebGLRenderingContext = context3D.webglContext;
		
		gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, _webglTexture);
		gl.pixelStorei(WebGLRenderingContext.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
		(gl as WebGLRenderingContext2).texImage2D(WebGLRenderingContext.TEXTURE_2D, 0, 
			WebGLRenderingContext.RGBA, WebGLRenderingContext.RGBA, 
			WebGLRenderingContext.UNSIGNED_BYTE, source.image);
		gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MAG_FILTER, WebGLRenderingContext.LINEAR);
		gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MIN_FILTER, WebGLRenderingContext.LINEAR);
		
		/*
		if(!texture._powerOf2)
		{
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		}
		else
		{
		*/
			gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_WRAP_S, WebGLRenderingContext.REPEAT);
			gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_WRAP_T, WebGLRenderingContext.REPEAT);
		//}
		
		//	gl.generateMipmap(gl.TEXTURE_2D);
		gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, null);
	}
}
}