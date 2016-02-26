var apptList = ( JSON.parse( localStorage.getItem( 'appointment1' ) ) );
$(".title").html(apptList.title);
$(".street").html(apptList.street);
$(".city-state").html(apptList.cityState);
$(".date").html(apptList.date);
$(".time").html(apptList.time);
$(".notes").html(apptList.notes);
