# UDIndicator
A custom component counter indicator for powershell universaldashboard. Here is a demo on how to use, this will show me the running services on your computer out of all the services on your computer:-
```
Import-Module -Name UniversalDashboard.Community
Import-Module -Name UniversalDashboard.UDIndicator
Get-UDDashboard | Stop-UDDashboard
Start-UDDashboard -Port 10005 -Dashboard (
  New-UDDashboard -Title "Powershell UniversalDashboard" -Content {
    New-UDLayout -Columns 6 -Content {
      New-UDHeading -Size 4 -Text "Running Services"
      $total = (get-service).count
      $running = (get-service | ? { $_.Status -eq 'Running' }).count
      New-UDIndicator -Value $running -MaxValue $total -Width 200
    }

  }
)
```
