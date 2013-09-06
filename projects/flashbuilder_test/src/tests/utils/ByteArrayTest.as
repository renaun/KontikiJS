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

package tests.utils
{
import flash.utils.ByteArray;
import flash.utils.Endian;

import tests.BaseTest;

public class ByteArrayTest extends BaseTest
{
	public function ByteArrayTest()
	{
		name = "ByteArrayTest";
	}
	
	public override function run():void
	{
		var bytes:ByteArray = new ByteArray();
		//bytes.endian = Endian.LITTLE_ENDIAN;
		
		bytes.position = 0;
		bytes.writeFloat(0xffffffff);
		out("FLOAT");
		print(bytes);
		bytes.position = 0;
		bytes.writeByte(-1);
		bytes.writeByte(128);
		bytes.writeByte(128);
		bytes.writeByte(128);
		out("BYTES");
		print(bytes);
		bytes.position = 0;
		bytes.writeInt(0xffffffff);
		out("INT");
		print(bytes);
		
		stepHandler("run");
	}
	
	private function print(bytes:ByteArray):void
	{
		bytes.position = 0;
		out(bytes.endian + "/" + bytes.length + "/" + bytes.bytesAvailable + " - " + bytes.readFloat());
		bytes.position = 0;
		out(bytes.endian + "/" + bytes.length + "/" + bytes.bytesAvailable + " - " 
			+ bytes.readUnsignedByte().toString(10) +","
			+ bytes.readUnsignedByte().toString(10) +","
			+ bytes.readUnsignedByte().toString(10) +","
			+ bytes.readUnsignedByte().toString(10));
		bytes.position = 0;
		out(bytes.endian + "/" + bytes.length + "/" + bytes.bytesAvailable + " - " 
			+ bytes.readShort().toString(10) +","
			+ bytes.readShort().toString(10));
	}
}
}