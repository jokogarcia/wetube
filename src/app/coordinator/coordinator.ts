class MasterScript{
	private var elements;
	private var index;
	private var masterId;
	private var slaveId;
	constructor(masterScriptString, masterId, slaveId){
		this.elements = new Array();
		this.masterId=masterId;
		this.slaveId=slaveId;
		var arr = masterScriptString.split(";");
		arr.foreach((element)=>this.elements.push(new ScriptInstruction(element)));
		this.index=0;
	}
	public getCurrent(){
		return this.elements[this.index];
	}
	public next(){
		index++;
		if(this.elements.length>=index){
			return null;
		}
		return this.getCurrent();
	}
	public IsLastElement(){
		return (this.index+1 == this.elements.length);
	}
	
	public GetMasterId(){return this.masterId;}
	public GetSlaveId(){return this.slaveId;}
}
class ScriptInstruction{
	public var Timecode;
	public var InstructionCode;
	public var Parameter;
	constructor(str){
		var arr  = str.split(",");
		this.Timecode=arr[0];
		this.InstructionCode=arr[1];
		this.Parameter=arr[2];
	}
	public Run(){
		Console.WriteLine("Running "+this.InstructionCode+" at Timecode "+this.Timecode+" ("player.getCurrentTime()+")";
	}
}
class Coordinator{
	private var masterPlayer;
	private var slavePlayer;
	private var script;
	function coordinatorFunc(){
		if(parsedScript.GetCurrent().Timecode >= player.getCurrentTime()){
			parsedScript.GetCurrent().Run();
		}
	}
	constructor(player1DomId,player2DomId,scriptstr,videoId1,videoId2){
		this.masterPlayer = new YT.Player(this.player1DomId, {
          height: '390',
          width: '640',
          videoId: videoId1,
          events: {
            'onReady': this.onPlayer1Ready,
            'onStateChange': this.onPlayer1StateChange
          }
        });
		this.slavePlayer = new YT.Player(this.player2DomId, {
          height: '390',
          width: '640',
          videoId: videoId2,
          events: {
            'onReady': this.onPlayer2Ready,
            'onStateChange': this.onPlayer2StateChange
          }
        });
	}
	
}
