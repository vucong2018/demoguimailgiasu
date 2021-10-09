function sendALLMail(){ 

    const data = SpreadsheetApp.getActive().getSheetByName('data').getActiveRange().getValues(); // 
  
    data.forEach(record => {
      let name = record[1];
      let email = record [2];
      let time_of_time = record[3];
      let subject = 'Thư mời '+name +' tham gia cuộc họp của CLB Gia sư tháng 10'; //
       var body = HtmlService.createTemplateFromFile('demo'); // 
        body.name1 = name; //<?= name1 ?>
      // Gửi Email
       MailApp.sendEmail({
        to: email,
        subject: subject,
        htmlBody: body.evaluate().getContent() //
        });
  })
  
  }
  
  
  