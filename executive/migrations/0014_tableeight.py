# Generated by Django 5.0.1 on 2024-01-15 16:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('executive', '0013_auto_20240116_0013'),
    ]

    operations = [
        migrations.CreateModel(
            name='TableEight',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('awards_faculty', models.CharField(max_length=50)),
                ('awards_title', models.CharField(max_length=50)),
                ('awards_date', models.DateField()),
                ('awards_type', models.CharField(max_length=50)),
                ('awards_status', models.CharField(max_length=300)),
            ],
        ),
    ]
