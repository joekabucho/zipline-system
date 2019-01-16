#pragma strict

var endPos : Transform;

function UseZipline()
{
	var time : float = 5;
    var elapsedTime : float = 0;
    var startingPos : Vector3 = transform.position;
    
    while (elapsedTime < time)
    {
    	transform.position = Vector3.Lerp(startingPos, endPos.position, (elapsedTime / time));
    	elapsedTime += Time.deltaTime;
    	yield;
    }
}