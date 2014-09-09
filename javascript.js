// Συναρτήσεις που βοηθάνε στην απόκρυψη/εμφάνιση του 
// textbox της πιστωτικής κάρτας

function SelectChanged2()
{
  document.getElementById("arpistkar").style.display="block";
}

function SelectChanged1()
{
  document.getElementById("arpistkar").style.display="none";
}

// Η συνάρτηση που ελέγχει αν είναι έγκυρη η παραγγελία
// Ελέγχει αν το μήκος του ονόματος και του επιθέτου είναι ίσο με μηδέν
// Ελέγχει αν το μήκος του τηλεφώνου είναι διάφορο των 10 ψηφίων
// Τέλος ελέγχει αν το μήκος της κάρτας είναι 16 ψηφία

function checkTotal() {
document.listForm.total.value = '';
var sum = 0;
for (i=0;i<document.listForm.proion.length;i++) {
		  if (document.listForm.proion[i].checked) {
		  	sum = sum + parseInt(document.listForm.proion[i].value);
		  }
		}
document.listForm.total.value = sum;
}


function paraggelia()
{

  onoma=document.getElementById('onoma').value;
  epitheto=document.getElementById('epitheto').value;
  til=document.getElementById('til').value;
  epilogi=document.getElementById('pistotiki').value;
  arithmos=document.getElementById('arithmos').value;

  submitOK="true";

if(document.listForm.total.value=='0')
{
alert("Παρακαλώ επιλέξτε προιόν!");
submitOK="false";
}

  if(onoma.length=='0')
  {
    alert("Λάθος όνομα!");
    submitOK="false";
  }

  if(epitheto.length=='0')
  {
    alert("Λάθος επίθετο!");
    submitOK="false";
  }

  if(til.length!=10||isNaN(til))
  {
    alert("Λάθος τηλέφωνο!");
    submitOK="false";
  }


  if(epilogi=='2')
  {
    if(document.getElementById("arpistkar").style.display=="block")
    {
      if(arithmos.length!=16||isNaN(arithmos))
      {
        alert("Λάθος αριθμός κάρτας!");
        submitOK="false";
      }
    }
  }




  if(submitOK=="true")
  {
	
    var answer=confirm("Tο σύνολο είναι: " + document.listForm.total.value +  "! Είστε σίγουρος ότι θέλετε να συνεχίσετε;")
    if (answer)
    {
	
      alert("Η παραγγελία σας ολοκληρώθηκε επιτυχώς!");
    }
    else
    {
      akyrwsi();
    }
  }
}

// Η συνάρτηση που ενεργοποιείται όταν πατήσουμε άκυρωση στην παραγγελία

function akyrwsi()
{
  document.getElementById('onoma').value=" ";
  document.getElementById('epitheto').value=" ";
  document.getElementById('til').value=" ";
  document.getElementById('metrita').selected="selected";
  for(i=0;i<document.listForm.proion.length;i++){
	if (document.listForm.proion[i].checked) {
	     document.listForm.proion[i].checked=false;
}
}
document.listForm.total.value = 0;
  SelectChanged1();
}

