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

package flash.utils
{
	
	import renaun.html.stub.ArrayBuffer;
	import renaun.html.stub.JSDataView;
	import renaun.html.stub.Uint8Array;

public class ByteArray implements IDataInput, IDataOutput
{
	private static const RESIZE_FACTOR:Number = 2;
	
	public function ByteArray(length:int = 128)
	{
		rawBytes = new ArrayBuffer();
		_bytesAvailable = 0;
	}
	
	// JS Stuff
	private var rawBytes:ArrayBuffer;
	private var _length:uint = 0;
	
	private var _bytesAvailable:uint = 0;
	public function get bytesAvailable():uint
	{
		return _bytesAvailable;
	}
	public function get length():uint
	{
		return _length;
	}
	public function set length(value:uint):void
	{
		// TODO if its zero delete the buffer contents, 
		_length = value;
	}
	public var position:uint = 0;
	public var shareable:Boolean = false;
	
	private function resizeBuffer(newLength:int):void
	{
		
		if (newLength == 0) 
			newLength = 128; // default is 128 bytes	
		
		var newBuffer:ArrayBuffer = new ArrayBuffer(newLength);
		
		if (rawBytes.byteLength != 0)
		{
			var rB8View:Uint8Array = new Uint8Array(rawBytes);
			var nB8View:Uint8Array = new Uint8Array(newBuffer);
			var len:uint = length;
			for (var i:int = 0; i < len; i++)	
				nB8View[i] = rB8View[i];
		}
		rawBytes = newBuffer;
	}
	
	public function compress(algorithm:String = "zlib"):void
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.compress() $$$$");
		
	}
	
	public function uncompress(algorithm:String = "zlib"):void
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.uncompress() $$$$");
		
	}
	
	public function readBytes(bytes:ByteArray, offset:uint = 0, length:uint = 0):void
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readBytes() $$$$");
	}
	
	public function readBoolean():Boolean
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readBoolean() $$$$");
		return false;
	}
	
	public function readByte():int
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readByte() $$$$");
		return 0;
	}
	
	public function readUnsignedByte():uint
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readUnsignedByte() $$$$");
		return 0;
	}
	
	public function readShort():int
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readShort() $$$$");
		return 0;
	}
	
	public function readUnsignedShort():uint
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readUnsignedShort() $$$$");
		return 0;
	}
	
	public function readInt():int
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readInt() $$$$");
		return 0;
	}
	
	public function readUnsignedInt():uint
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readUnsignedInt() $$$$");
		return 0;
	}
	
	public function readFloat():Number
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readDouble() $$$$");
		return 0;
	}
	
	public function readDouble():Number
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readDouble() $$$$");
		return 0;
	}
	
	public function readMultiByte(length:uint, charSet:String):String
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readMultiByte() $$$$");
		return null;
	}
	
	public function readUTF():String
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readUTF() $$$$");
		return null;
	}
	
	public function readUTFBytes(length:uint):String
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readUTFBytes() $$$$");
		return null;
	}
	
	public function readObject():*
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readObject() $$$$");
		return null;
	}
	
	public function get objectEncoding():uint
	{
		return 0;
	}
	
	public function set objectEncoding(version:uint):void
	{
	}
	
	private var _endian:String = Endian.LITTLE_ENDIAN;
	public function get endian():String
	{
		return _endian;
	}
	
	public function set endian(type:String):void
	{
		_endian = type;
	}
	
	public function writeBytes(bytes:ByteArray, offset:uint=0, length:uint=0):void
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.writeBytes() $$$$");
	}
	
	public function writeBoolean(value:Boolean):void
	{
		if (length + 1 > rawBytes.byteLength)
			resizeBuffer(rawBytes.byteLength * RESIZE_FACTOR);
		length += 1;
		var d:JSDataView = new JSDataView(rawBytes);
		d.setInt8(position++, (value == 0) ? 0 : 1);
	}
	
	public function writeByte(value:int):void
	{
		if (length + 1 > rawBytes.byteLength)
			resizeBuffer(rawBytes.byteLength * RESIZE_FACTOR);
		length++;
		var d:JSDataView = new JSDataView(rawBytes);
		d.setInt8(position++, value);
	}
	
	public function writeShort(value:int):void
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.writeShort() $$$$");
	}
	
	public function writeInt(value:int):void
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.writeInt() $$$$");
	}
	
	public function writeUnsignedInt(value:uint):void
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.writeUnsignedInt() $$$$");
	}
	
	public function writeFloat(value:Number):void
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.writeFloat() $$$$");
	}
	
	public function writeDouble(value:Number):void
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.writeDouble() $$$$");
	}
	
	public function writeMultiByte(value:String, charSet:String):void
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.writeMultiByte() $$$$");
	}
	
	public function writeUTF(value:String):void
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.writeUTF() $$$$");
	}
	
	public function writeUTFBytes(value:String):void
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.writeUTFBytes() $$$$");
	}
	
	public function writeObject(object:*):void
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.writeObject() $$$$");
	}
}
}