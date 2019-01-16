#pragma strict

private var ziplineScript : Zipline;

function Start()
{
	ziplineScript = GameObject.Find("First Person Controller").GetComponent(Zipline);
}

function OnTriggerEnter(Other : Collider)
{
     if(Other.gameObject.tag == "Player")
     {
		if(Input.GetKeyDown("f"))
		{
			ziplineScript.UseZipline();
		}
     }
}