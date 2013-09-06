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

package tests
{
public class BaseTest implements ITestable
{
	public function BaseTest()
	{
	}
	
	protected var out:Function;
	
	public function set output(value:Function):void
	{
		out = value;
	}
	
	private var _name:String = "BaseTest";
	
	public function get name():String
	{
		return _name;
	}

	public function set name(value:String):void
	{
		_name = value;
	}

	private var _stepHandler:Function;
	public function get stepHandler():Function
	{
		return _stepHandler;
	}

	public function set stepHandler(value:Function):void
	{
		_stepHandler = value;
	}

	protected var _hasPassed:Boolean = false;
	
	
	
	protected var _errors:String;
	public function get errors():String
	{
		return _errors;
	}
	
	public function set errors(value:String):void
	{
		_errors = value;
	}
	
	
	public function hasPassed():Boolean
	{
		return _hasPassed;
	}
	
	
	
	public function buildup():void
	{
		stepHandler("buildup");
	}
	public function run():void
	{
		stepHandler("run");
	}
	public function teardown():void
	{
		stepHandler("teardown");
	}
}
}