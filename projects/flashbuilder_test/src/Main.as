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

package
{
import flash.display.Sprite;
import flash.text.TextField;

import tests.ITestable;
import tests.TestRunner;
import tests.media.SoundTest;

[SWF(frameRate="60", width="640", height="640", backgroundColor="0x336699")]
public class Main extends Sprite
{
	public function Main()
	{
		var t:TextField = new TextField();
		t.text = "KontikiJS Test Suite";
		addChild(t);
		
		t.domElement.style.position = "absolute";
		t.domElement.style.left = "10px";
		t.domElement.style.top = "10px";
		
		// Create Array of Tests
		var testSuite:Vector.<ITestable> = new Vector.<ITestable>();
		testSuite.push(new SoundTest());
		
		// Run Tests
		var runner:TestRunner = new TestRunner();
		runner.textField = t;
		runner.runTests(testSuite);
	}
}
}