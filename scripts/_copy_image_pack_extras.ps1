$base = Split-Path $PSScriptRoot
$o = Join-Path $base ".emergent\LAIAX_image_pack\LAIAX_image_pack\originals"
$img = Join-Path $base "assets\img"
$maps = @{
  "instituto-closing.jpg" = "07_institutional_architecture.jpg"
  "nosotros-closing.jpg" = "04_late_night_strategy_room.jpg"
  "aliado-cut.jpg" = "07_institutional_architecture.jpg"
  "aliado-fly.jpg" = "03_bright_founder_corridor.jpg"
  "aliado-mesa.jpg" = "09_operations_labs_strategy.jpg"
  "pilar-01.jpg" = "05_executive_auditorium_made.jpg"
  "pilar-02.jpg" = "09_operations_labs_strategy.jpg"
  "pilar-03.jpg" = "01_home_city_latam_future.jpg"
  "comp-01.jpg" = "06_founders_airport_fellowship.jpg"
  "comp-02.jpg" = "05_executive_auditorium_made.jpg"
  "comp-03.jpg" = "09_operations_labs_strategy.jpg"
  "comp-04.jpg" = "10_selective_admissions_interview.jpg"
  "made-cities.jpg" = "01_home_city_latam_future.jpg"
  "mentor-cesar.jpg" = "08_executive_portrait_vertical.jpg"
  "mentor-rodolfo.jpg" = "08_executive_portrait_vertical.jpg"
  "manifiesto-hero.jpg" = "07_institutional_architecture.jpg"
  "manifiesto-quote.jpg" = "02_dark_window_quote.jpg"
  "manifiesto-closing.jpg" = "03_bright_founder_corridor.jpg"
  "blog-hero.jpg" = "01_home_city_latam_future.jpg"
  "blog-closing.jpg" = "02_dark_window_quote.jpg"
  "article-featured.jpg" = "05_executive_auditorium_made.jpg"
  "article-01.jpg" = "02_dark_window_quote.jpg"
  "article-02.jpg" = "04_late_night_strategy_room.jpg"
  "article-03.jpg" = "06_founders_airport_fellowship.jpg"
  "article-04.jpg" = "07_institutional_architecture.jpg"
  "article-05.jpg" = "09_operations_labs_strategy.jpg"
  "article-06.jpg" = "10_selective_admissions_interview.jpg"
}
foreach ($key in $maps.Keys) {
  $src = Join-Path $o $maps[$key]
  $dst = Join-Path $img $key
  Copy-Item -LiteralPath $src -Destination $dst -Force
}
Write-Host "Copied $($maps.Count) fills from originals to assets/img"
