function check_local_ports() {

    /*===========================================
      NOTE: Check performance data.
    ===========================================*/
    let result_1 = performance.getEntriesByName('http://127.0.0.1:4444/status')[0]['nextHopProtocol'];
    let result_2 = performance.getEntriesByName('http://127.0.0.1:9515/status')[0]['nextHopProtocol'];

    if (result_1 == 'http/1.1') {
      console.log('Geckodriver has been detected!');
      document.getElementById('geckodriver_button').className = 'btn-success'
    }

    if (result_2 == 'http/1.1') {
      console.log('Chromdriver has been detected!');
      document.getElementById('chromedriver_button').className = 'btn-success'
    }

}
