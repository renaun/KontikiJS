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

package flash.ui
{
public class Keyboard
{
	public static const A: uint = 65;
	public static const B: uint = 66;
	public static const BACKQUOTE: uint = 192;
	public static const BACKSPACE: uint = 8;
	public static const BACKSLASH: uint = 220;
	public static const C: uint = 67;
	public static const D: uint = 68;
	public static const E: uint = 69;
	public static const END: uint = 35;
	public static const F: uint = 70;
	public static const G: uint = 71;
	public static const H: uint = 72;
	public static const HOME: uint = 36;
	public static const I: uint = 73;
	public static const J: uint = 74;
	public static const K: uint = 75;
	public static const L: uint = 76;
	public static const M: uint = 77;
	public static const N: uint = 78;
	public static const NUMBER_0: uint = 48;
	public static const NUMBER_9: uint = 57;
	public static const O: uint = 79;
	public static const P: uint = 80;
	public static const Q: uint = 81;
	public static const R: uint = 82;
	public static const S: uint = 83;
	public static const SPACE: uint = 32;
	public static const T: uint = 84;
	public static const U: uint = 85;
	public static const V: uint = 86;
	public static const W: uint = 87;
	public static const X: uint = 88;
	public static const Y: uint = 89;
	public static const Z: uint = 90;
	public static const ENTER: uint = 13;
	public static const RIGHT: uint = 39;
	public static const LEFT: uint = 37;
	public static const DOWN: uint = 40;
	public static const UP: uint = 38;
	public static const TAB: uint = 9;
	public static const CONTROL: uint = 17;
	public static const ESCAPE: uint = 27;
	
	public static var capsLock:Boolean = false;
	public static var numLock:Boolean = false;
	public static var hasVirtualKeyboard:Boolean = false;
	public function Keyboard()
	{
	}
}
}