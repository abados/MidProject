using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using CampaignProject.Entity;
using System.Diagnostics;
using CampaignProject.Model;
using Newtonsoft.Json.Linq;
using Microsoft.VisualBasic;
using Microsoft.Extensions.FileSystemGlobbing;
using System.Linq;
using LoggingLibrary;

namespace CampaignProject.MicroService
{
    public static class Business
    {
        [FunctionName("Business")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post","delete", Route = "Business/{action}/{Identifier?}/{specificAction?}")] HttpRequest req,
            string action, string Identifier, string specificAction, ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

          
            string azureFuncName = "Business";
            string dictionaryKey = azureFuncName + "." + action;
            string requestBody;
            ICommand commmand;
            if (action.Equals("ADD") || action.Equals("Find"))
            {
                dictionaryKey = "Mutual." + action;
                commmand = MainManager.Instance.commandManager.CommandList[dictionaryKey];
            }
            else
            {
                commmand = MainManager.Instance.commandManager.CommandList[dictionaryKey];
            }
            try 
            {
                if (commmand != null)
                {

                    requestBody = await req.ReadAsStringAsync();
                    return new OkObjectResult(commmand.ExecuteCommand(Identifier, requestBody, specificAction, azureFuncName));
                }
                else
                {

                    MainManager.Instance.myLogger.LogError("Problam Was Found With the Command", LoggingLibrary.LogLevel.Error);
                    return new BadRequestObjectResult("Problam Was Found");
                }
            }
            catch(Exception ex)
            {
                MainManager.Instance.myLogger.LogException("Problam Was Found in Business Azure File", ex) ;
                return new BadRequestObjectResult("Problam Was Found");
            }

}
    }
}
