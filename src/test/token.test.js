const apiURL = "https://api.noroff.dev/api/v1/auction/listings";

test("test to see if API needs access token", async () => {
  const response = await fetch(`${apiURL}/auction/listings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Test",
      description: "test.description",
      endsAt: "2024-01-01T00:00:00.000Z",
    }),
  });
  const json = await response.json();
  // expected results: 404, api cannot be accessed without a token in the header.
  expect(response.status).toEqual(404);
});
