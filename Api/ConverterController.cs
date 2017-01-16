using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace TempCFConverter.Api
{
    public class ConverterController : ApiController
    {

        // GET api/<controller>
        public IEnumerable<string> Get(string temperature)
        {
            string Farenheit = temperature;
            string Celsius = temperature;
            var client = new ConverterServiceReference.TempConvertSoapClient();

            return new string[] { client.CelsiusToFahrenheit(Celsius), client.FahrenheitToCelsius(Farenheit) };
            //{ return new string[] { "value1", "value2" }; }

        }

        //GET api/<controller>/5
        //public string Get(string tempCTF)
        //{
        //    string celsius = tempCTF;
        //    var client = new ConverterServiceReference.TempConvertSoapClient();
        //    { return client.CelsiusToFahrenheit(celsius); }
        //}


        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}