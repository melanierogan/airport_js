describe('airport', function() {
  it('can land a plane', function(){
    airport = new Airport
    plane = { isFlying: true }
    airport.land(plane)
    expect(airport.hangar).toContain(plane)
  })

  it('cannot land plane that is not flying', function(){
    airport = new Airport
    plane = { isFlying: false }
    expect(function () { airport.land(plane) }).toThrow('No!')
  })

  it('plane can takeoff from airport', function() {
    airport = new Airport
    plane = { isFlying: true}
    airport.land(plane)
    plane.isFlying = false 
    airport.takeOff(plane)
    expect(airport.hangar).toEqual([])
  })

  it('a plane cannot take off if it has already taken off', function() {
    airport = new Airport
    plane = { isFlying: true }
    expect(function () { airport.takeOff(plane) }).toThrow('Plane has already taken off')
  });
});