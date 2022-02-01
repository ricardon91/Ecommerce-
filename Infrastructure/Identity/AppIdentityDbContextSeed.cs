using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUserAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Ricardo",
                    Email = "ricardo_l.h.p@hotmail.com",
                    UserName = "ricardo_l.h.p@hotmail.com",
                    Address = new Address
                    {
                        FirstName = "Ricardo",
                        LastName = "Noronha",
                        Street = "Rua Gabriela, 78",
                        City = "Guarulhos",
                        State = "SP",
                        ZipCode = "07041110"
                    }
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}
