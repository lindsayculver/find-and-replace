describe("replace", function() {
  it('recieves user input as a string', function() {
    expect("love").to.equal("love");
  });

  it('finds instances of a findWord and replaces it with a new word in the userString', function() {
    expect(replaceWord("love is love", "love", "art")).to.equal("art is art");
  });
});
