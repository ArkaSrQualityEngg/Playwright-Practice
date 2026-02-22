import { test, expect } from '@playwright/test';

test.describe('API Testing', async()=> {
    test("GET request", async ({ request }) => {
    const response = await request.get("https://reqres.in/api/users/2",{
       headers: { "x-api-key": "reqres_c40396f75fa142e7b7dfcee248b2d4ff" }, 
    });
    await expect(response.status()).toBe(200);
    const text = await response.text();
    await expect(text).toContain("janet.weaver@reqres.in");
    console.log(await response.json());
  })

  test("POST request", async ({ request }) => {
    const response = await request.post("https://reqres.in/api/login",{
       headers: { "x-api-key": "reqres_c40396f75fa142e7b7dfcee248b2d4ff" }, 
       data: {
        "email": "eve.holt@reqres.in", "password": "cityslicka"
       }
    });
    await expect(response.status()).toBe(200);
    const text = await response.text();
    await expect(text).toContain("Classic ReqRes still works. Projects add persistence, auth, and logs.");
    console.log(await response.json());
  })

  test("PUT request", async ({ request }) => {
    const response = await request.put("https://reqres.in/api/users/2",{
       headers: { "x-api-key": "reqres_c40396f75fa142e7b7dfcee248b2d4ff" }, 
       data: {
        "name": "morpheus", 
        "job": "zion resident"
       }
    });
    await expect(response.status()).toBe(200);
    const text = await response.text();
    await expect(text).toContain("zion resident");
    console.log(await response.json());
  })

  test("DELETE request", async ({ request }) => {
    const response = await request.delete("https://reqres.in/api/users/2",{
       headers: { "x-api-key": "reqres_c40396f75fa142e7b7dfcee248b2d4ff" },
    });
    await expect(response.status()).toBe(204);
  })
});