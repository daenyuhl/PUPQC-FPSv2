from django.db import models
# from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

# # For the Django admin manager database
# class CustomUserManager(BaseUserManager):
#     def create_user(self, email, password=None, **extra_fields):
#         if not email:
#             raise ValueError("The Email field must be set")
#         email = self.normalize_email(email)
#         user = self.model(email=email, **extra_fields)
#         user.set_password(password)
#         user.save(using=self._db)
#         return user

#     def create_superuser(self, email, password=None, **extra_fields):
#         extra_fields.setdefault("is_staff", True)
#         extra_fields.setdefault("is_superuser", True)

#         return self.create_user(email, password, **extra_fields)

# # For the FPS system user database
# class User(AbstractBaseUser):
#     email = models.EmailField(unique=True)
#     password = models.CharField(max_length=128)
#     lastname = models.CharField(max_length=100, null=True)
#     firstname = models.CharField(max_length=100, null=True)
#     middlename = models.CharField(max_length=100, null=True)
#     is_active = models.BooleanField(default=True)

#     objects = CustomUserManager()

#     USERNAME_FIELD = "email"

#     def __str__(self):
#         return self.email
