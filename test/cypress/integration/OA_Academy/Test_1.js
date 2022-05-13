describe("Launches a website", function () {
    it("Launches the Oa_Academy page", function () {
      cy.visit("https://www.oa.edu.ua/")
    });
  });

  describe("Click buttom", function () {
    it("Click buttom the Oa_Academy page", function () {
      cy.get('#univercity > a').click()
      cy.get('#departments > a').click()
      cy.get('#science > a').click()
      cy.get('#student > a').click()
      cy.get('#resources > a').click()
      cy.get('.logo').click()
      cy.get(':nth-child(4) > .more > :nth-child(1) > a').click()
      cy.get('.logo').click()
      cy.get(':nth-child(4) > .more > :nth-child(2) > a').click()
      cy.get('.logo').click()
    });
  });

      describe("Click language", function () {
        it("Click language the Oa_Academy page", function () {
      cy.get('.col-sm-1 > a').click()
      cy.get('.col-sm-1 > a').click()
    });
  });

 describe("Click search", function () {
        it("Click search the Oa_Academy page", function () {
      cy.get('.sb-icon-search').click()
      cy.get('input[type="search"]').type('розклад')
      cy.get('.sb-search-submit').click()
      cy.get('.logo').click()
    });
  });

  describe("Scalability", function () {
    it("Scalability the Oa_Academy page", function () {
     cy.viewport('ipad-2') 
     cy.viewport('iphone-4') 
     cy.viewport('iphone-6') 
     cy.viewport('iphone-xr') 
     cy.viewport('macbook-13') 
     cy.viewport('macbook-15') 
     cy.viewport('samsung-s10') 
     cy.viewport(1000, 660) 
});
});

describe("Open video", function () {
  it("Open video the Oa_Academy page", function () {
    cy.get(':nth-child(1) > a > .glyphicon').click()
    cy.get('.fancybox-button--close').click()
});
});

describe("Phone", function () {
  it("Phone the Oa_Academy page", function () {
   cy.viewport('iphone-6') 
   cy.get('.navbar-toggle').click()
   cy.get('#univercity > a').click()
   cy.get('.logo_s').click()
   cy.contains("Студент").click()
   cy.contains("Викладач").click()
   cy.contains("Випускник").click()
   cy.viewport(1000, 660) 
   cy.get('.glyphicon-folder-open').click()
   cy.get(':nth-child(1) > .findoc').click()
   cy.get('.logo').click()
});
});

describe("Buttom image", function () {
  it("Buttom image the Oa_Academy page", function () {
    cy.get('.owl-pagination > :nth-child(1)').click()
    cy.get('.owl-pagination > :nth-child(2)').click()
    cy.get('.owl-pagination > :nth-child(3)').click()
    cy.get('.owl-pagination > :nth-child(4)').click()
    cy.get('.owl-pagination > :nth-child(5)').click()
    cy.get('.owl-pagination > :nth-child(6)').click()
    cy.get('.owl-pagination > :nth-child(7)').click()
    cy.get('.owl-pagination > :nth-child(8)').click()
    cy.get('.owl-pagination > :nth-child(9)').click()
    cy.get('.owl-pagination > :nth-child(10)').click()
    cy.get('.owl-pagination > :nth-child(1)').click()
    cy.get('.owl-pagination > :nth-child(2)').click()
});
});