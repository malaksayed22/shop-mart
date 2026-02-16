import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ShoppingCartIcon, UserIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogoutButton from "./LogoutButton";
import CartBadge from "./CartBadge";
import WishlistBadge from "./WishlistBadge";

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <nav className="shadow py-6 px-10">
        <div className="mx-auto font-semibold flex flex-col md:flex-row items-start md:items-center ps-4 md:ps-0 justify-between">
          <h1 className="text-2xl flex items-center gap-3">
            <Link href={"/"} className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black flex items-center justify-center shadow-lg rounded">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              ShopMart
            </Link>
          </h1>

          <div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className="">
                    <Link href="/products">Products</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className="">
                    <Link href="/brands">Brands</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild className="">
                    <Link href="/categories">Categories</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div>
            <NavigationMenu>
              <NavigationMenuList className="gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <UserIcon className="size-6 cursor-pointer" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuGroup>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      {session ? (
                        <>
                          <Link href={"/profile"}>
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                          </Link>
                          <Link href={"/wishlist"}>
                            <DropdownMenuItem>Wishlist</DropdownMenuItem>
                          </Link>
                          <Link href={"/orders"}>
                            <DropdownMenuItem>My Orders</DropdownMenuItem>
                          </Link>
                          <LogoutButton />
                        </>
                      ) : (
                        <>
                          <Link href={"/login"}>
                            <DropdownMenuItem>Login</DropdownMenuItem>
                          </Link>
                          <Link href={"/register"}>
                            <DropdownMenuItem>Register</DropdownMenuItem>
                          </Link>
                        </>
                      )}
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild className="">
                    {session && <WishlistBadge token={session.token} />}
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild className="">
                    {session && <CartBadge token={session.token} />}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>
    </>
  );
}
