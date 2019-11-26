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
      $services = get-service
      $running = ($services | ? { $_.Status -eq 'Running' })
      New-UDIndicator -Value $running.count -MaxValue $services.count -Width 200
    }

  }
)
```
