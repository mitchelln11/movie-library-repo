using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using WebAPISample.Models;

namespace WebAPISample.Controllers
{
    public class MovieController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        // GET api/movie
        //public IEnumerable<Movie> Get()
        //{
        //    // Retrieve all movies from db logic
        //    List<Movie> movielist = db.Movies.ToList();
        //    return movielist;
        //}
        public IHttpActionResult Get()
        {
            //LINQ
            List<Movie> movielist = db.Movies.ToList();          
            return Ok(movielist);
}

        // GET api/values/5
        //public string Get(int id)
        //{
        //    // Retrieve movie by id from db logic
        //   return db.Movies.Where(m=>m.MovieId == id).SingleOrDefault().ToString(); 

        //}
        public IHttpActionResult Get(int id)
        {
            return Ok(db.Movies.Where(m => m.MovieId == id).SingleOrDefault());
        }


        // POST api/movie
        //public void Post([FromBody]Movie value)
        //{
        //    // Create movie in db logic
        //}

        //------------------USE THIS---------------------
        public IHttpActionResult Post([FromBody]Movie value)
        {
            //value = new Movie();
            //value.MovieId;
            db.Movies.Add(value);
            db.SaveChanges();
            List<Movie> movielist = db.Movies.ToList();
            return Ok(value);
        }
        //-----------------------------------------------



        // PUT api/movie/5
        //public void Put(int id, [FromBody]string value)
        //{
        //    // Update movie in db logic
        //}
        public IHttpActionResult Put(int? id, [FromBody]Movie value)
        {
            Movie moviefromdb = db.Movies.Where(m=>m.MovieId == id).FirstOrDefault();
            moviefromdb.Genre = value.Genre;
            moviefromdb.Director = value.Director;
            moviefromdb.Title = value.Title;
            db.SaveChanges();
            return Ok(moviefromdb);
        }

        // DELETE api/values/5
        public IHttpActionResult Delete(int id)
        {
            // Delete movie from db logic
            Movie movie = db.Movies.Find(id);
            db.Movies.Remove(movie);
            db.SaveChanges();
            return Ok();
        }
    }

}