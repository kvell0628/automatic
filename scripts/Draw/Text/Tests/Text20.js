// Auto generated by Testing Dashboard
// File        : scripts/Draw/Text/Tests/Text20.js
// Timestamp   : 2015-10-05 16:34:35
// Description : 

include('scripts/Pro/Developer/TestingDashboard/TdbTest.js');

function Text20() {
    TdbTest.call(this, 'scripts/Draw/Text/Tests/Text20.js');
}

Text20.prototype = new TdbTest();

Text20.prototype.test00 = function() {
    qDebug('running Text20.test00()...');
    this.setUp();
    this.importFile('scripts/Draw/Text/Tests/data/text20.dxf');
    this.selectAll();
    this.triggerCommand('explode');
    this.verifyDrawing('Text20_000.dxf');
    this.triggerCommand('explode');
    this.deselectAll();
    this.verifyDrawing('Text20_001.dxf');
    this.tearDown();
    qDebug('finished Text20.test00()');
};

