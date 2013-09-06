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
import flash.system.Capabilities;
import flash.text.TextField;

public class TestRunner
{

	public function TestRunner()
	{
	}
	
	private var currentTest:ITestable;
	public var textField:TextField;
	public var testGroup:Vector.<ITestable>;
	
	public var separator:String = (Capabilities.playerType == "js") ? "<br/>" : "\n";
	
	public function runTests(testGroup:Vector.<ITestable>):void
	{
		this.testGroup = testGroup;
		currentTest = this.testGroup.pop();
		currentTest.output = out;
		out("Running Tests .... " + currentTest.name);
		currentTest.stepHandler = processTest;
		currentTest.buildup();
		
	}
	
	private function out(msg:String):void
	{
		textField.appendText(separator + msg);
	}
	
	private function processTest(stepValue:String):void
	{
		if (stepValue == "buildup")
		{
			currentTest.run();
		}
		else if (stepValue == "run")
		{
			textField.appendText(separator + currentTest.name + ": " + currentTest.hasPassed());
			if (!currentTest.hasPassed())
				currentTest.teardown();
		}
		else if (stepValue == "teardown")
		{
			currentTest = testGroup.pop();
			currentTest.stepHandler = processTest;
			currentTest.buildup();
		}
	}
}
}