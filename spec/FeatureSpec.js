describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land an airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });
});
