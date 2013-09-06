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

package {
	
	import flash.utils.FlashEmbed;
	import flash.utils.FlashTimingEngine;
	
	import guice.GuiceJs;
	import guice.InjectionClassBuilder;
	import guice.Injector;
	import guice.loader.SynchronousClassLoader;
	import guice.loader.URLRewriterBase;
	
	import randori.webkit.xml.XMLHttpRequest;
	
	public class GuiceInjectorBootstrap {
		
		private var mainClassName:String;
		private var dynamicClassBaseUrl:String;
		
		public function launch(bgcolor:String, width:Number, height:Number, frameRate:Number = 60):void {
			var urlRewriter:URLRewriterBase = new URLRewriterBase();
			var loader:SynchronousClassLoader = new SynchronousClassLoader( new XMLHttpRequest(), urlRewriter, dynamicClassBaseUrl );
			var guiceJs:GuiceJs = new GuiceJs( loader );
			var injector:Injector = guiceJs.createInjector( null );
			var classBuilder:InjectionClassBuilder = injector.getInstance( InjectionClassBuilder ) as InjectionClassBuilder;
			//var module:GuiceModule = classBuilder.buildClass("FlashAPIInjector") as GuiceModule;
			//guiceJs.configureInjector(injector as ChildInjector, module);
			//injector = guiceJs.createInjector(module);
			
			//classBuilder = injector.getInstance( InjectionClassBuilder ) as InjectionClassBuilder;
			
			//var embed:FlashEmbed = new FlashEmbed();
			var obj2:* = classBuilder.buildClass( "flash.utils.FlashEmbed" );
			var obj:* = classBuilder.buildClass( mainClassName );
			//obj.main();
			if (bgcolor && bgcolor.indexOf("#") > -1)
				bgcolor = "0x" + bgcolor.substring(1, bgcolor.length);
			
			FlashTimingEngine.start(obj, frameRate, width, height, Number(bgcolor));
			//FlashTimingEngine.start(obj, 60, 320, 480, 0xcccccc);
		}
		
		public function GuiceInjectorBootstrap( mainClassName:String, dynamicClassBaseUrl:String ) {
			this.mainClassName = mainClassName;
			this.dynamicClassBaseUrl = dynamicClassBaseUrl;
		}
	}
}