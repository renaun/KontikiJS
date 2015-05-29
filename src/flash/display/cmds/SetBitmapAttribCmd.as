package flash.display.cmds {
	import flash.display.BitmapData;
	import flash.display.DisplayObject;
	import flash.geom.Matrix;
public	class SetBitmapAttribCmd extends SetAttribCmd {
	public var bmd:BitmapData;
	public var sprite:DisplayObject;
	public var worldMatrix:Matrix;
	public var matrix:Matrix;
	public var repeat:Boolean;
    public function SetBitmapAttribCmd(target:*,name: String, bmd: BitmapData,matrix,repeat:Boolean,sprite:DisplayObject) {
		this.bmd=bmd;
		this.sprite=sprite;
		this.matrix=matrix;
		this.worldMatrix=new Matrix();
        this.repeat=repeat;
		super(target,name,null);
    }
    override public function update():void {
        //this.value = this.target.createPattern(this.bmd.image,this.repeat? "repeat":"no-repeat");
		super.update();
    }
}
}	