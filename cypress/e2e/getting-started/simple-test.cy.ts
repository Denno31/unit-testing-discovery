describe("template spec", () => {
  it("passes test", () => {
    cy.visit("https://unit-testing-discovery.vercel.app/");
    cy.get(
      'img[alt="Next.js Logo"][fetchpriority="high"][width="180"][height="37"][decoding="async"][data-nimg="1"][class="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"]'
    ).should("exist");
  });
});
