<?php include "header.php"; ?>
  <meta name="description" content="Where every child is known and valued">
  <meta name="author" content="Squid40">
  <title>Ditcham Park School &#8211; Where every child is known and valued</title>
</head>

<body class="internal watermarked">
  <?php include "menu.php"; ?> 

  <section class="home-section__vacancies container-fluid h-100 ">
    <div class="row mt-5 mt-lg-0 p-md-5 ">
      <div class="col">
        <h2 class="text-center">Vacancies</h2>
        <hr class="beige pb-4 ">
      <div>
    </div>
    <div class="row">
      <div class="col">
          <div class="form-group text-center">
            <label for="select-category" class="vacancies-select" class="d-inline">
              <span class="label-category">Category:</span>
              <select class="form-control d-inline" id="select-category">
                <option>View all</option>
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
              </select>
            </label>
          </div>
      </div>
    </div>
    <div class="row row-vacancies mx-auto width-75">
      <div class="col">
        <hr class="beige-full pb-4">
      </div>
    </div>

    <div class="row row-vacancies mx-auto width-75 card-vacancies text-center"> 
      <div class="col col-sm-6 col-lg-4 col-xl-3">
        <?php include "vacancies-card.php"?>
      </div> 
      <div class="col col-sm-6 col-lg-4 col-xl-3">
        <a class="card drop-shadow w-100 card-geography">
          <div class="card-header">
          </div>
          <div class="card-body">  
            <h4>Geography Teacher</h4>
            <div class="card-details">
              <h5>L10-L14 Pension Scheme plus Additional Benefits</h5>
              <p class="card-vacancies--closing">
                <strong>Closing Date</strong>
                <br>
                20th October 2017
              </p>
              <p class="card-vacancies--start">
                <strong>Start Date:</strong>
                <br>
                ASAP
              </p>
            </div>
          </div>
          <div class="card-footer text-center">
            View this Vacancy &amp; Apply
          </div>
        </a>
      </div> 
      <div class="col col-sm-6 col-lg-4 col-xl-3">
        <?php include "vacancies-card.php"?>
      </div>
      <div class="col col-sm-6 col-lg-4 col-xl-3">
        <?php include "vacancies-card.php"?>
      </div>
      <div class="col col-sm-6 col-lg-4 col-xl-3">
        <?php include "vacancies-card.php"?>
      </div> 
      <div class="col col-sm-6 col-lg-4 col-xl-3">
        <?php include "vacancies-card.php"?>
      </div> 
      <div class="col col-sm-6 col-lg-4 col-xl-3">
        <?php include "vacancies-card.php"?>
      </div>
    </div>

      
  </section>
  
 

 
  <?php include "footer.php"; ?>