# Generated by Django 4.2.6 on 2023-11-24 04:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('executive', '0009_auto_20231122_2104'),
    ]

    operations = [
        migrations.CreateModel(
            name='TableSix',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('leave_faculty', models.CharField(max_length=50)),
                ('leave_type', models.CharField(max_length=50)),
                ('leave_start', models.DateField()),
                ('leave_end', models.DateField()),
                ('leave_duration', models.IntegerField(default=0)),
                ('leave_status', models.CharField(max_length=20)),
            ],
        ),
    ]