describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('sort an array from small to large',function(){
    expect(bubbleSort([20,8,5,34,51,55,2,1])).toEqual([1,2,5,8,20,34,51,55]);
  });
});
